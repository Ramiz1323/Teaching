const express = require("express");
const authRouter = express.Router();
const authModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isEmailExist = await authModel.findOne({ email });

  if (isEmailExist) {
    return res.status(400).json({ message: "Email already exists" });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await authModel.create({ username, email, password:hash });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await authModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  if (user.password !== hash) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    data:{
        username: user.username,
        email: user.email,
    },
  });
});

authRouter.post("/protected", async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    res.status(200).json({ message: "Protected route accessed" });
});

authRouter.post("/logout", async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
});

module.exports = authRouter;
