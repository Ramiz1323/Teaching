const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function signup(req, res) {
    const { username, email, password } = req.body;

    const isUserExists = await userModel.findOne({ $or: [username, email] });

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
    res.cookies('token', token);

    res.status(201).json({
        message: "SignUp Successfull",
        user: user,
    });
}

async function login(req, res) {
    const { email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });

    if (!isUserExists) {
        return res.status(401).json({
            message: "User Does not exists",
        });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    if (hashedPassword != isUserExists.password) {
        return res.status(401).json({
            message: "Incorrect User Details",
        });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookies('token', token);
}

module.exports = { signup, login };