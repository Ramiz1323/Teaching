const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blacklistedTokenModel = require("../models/blacklist.model.js");
const redisClient = require("../config/redis.config.js");

async function signup(req, res) {
    const { username, email, password } = req.body;

    const isUserExists = await userModel.findOne({
        $or: [{ username }, { email }]
    });

    if (isUserExists) {
        return res.status(400).json({ message: "User already Exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie('token', token);

    res.status(201).json({
        message: "SignUp Successfull",
        user: user,
    });
}

async function login(req, res) {
    const { email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });

    if (!isUserExists) {
        return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = bcrypt.compareSync(password, isUserExists.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const blacklistedToken = await redisClient.get(`blacklist:${req.cookies.token}`);

    if (blacklistedToken) {
        return res.status(401).json({ message: "Unauthorized (Token is blacklisted)" });
    }

    const token = jwt.sign({ id: isUserExists._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie('token', token);

    res.status(200).json({
        message: "Login Successfull",
        user: isUserExists,
        token,
    });
}

//Blacklisting the token in the MONGODB
async function logout(req, res) {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(400).json({ message: "Token not provided" });
    }

    await redisClient.set(`blacklist:${token}`, "true", "EX", 24 * 60 * 60); //24 hrs

    res.clearCookie('token');

    res.status(200).json({ 
        message: "Logout Successfull (Token Blacklisted in Redis)",
        token: token
    });
}

async function getme(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    //if the token is blacklisted, return an error

    const blacklistedToken = await redisClient.get(`blacklist:${token}`);

    if (blacklistedToken) {
        return res.status(401).json({ message: "Unauthorized (Token is blacklisted)" });
    }

    res.status(200).json({ user });
}

module.exports = { signup, login, logout , getme};