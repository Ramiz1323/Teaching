const express = require("express");
const authRouter = express.Router();
const authControllers = require("../controllers/auth.controllers");

//POST - /api/auth/signup
authRouter.post("/signup", authControllers.signup)

//POST - /api/auth/login
authRouter.post("/login", authControllers.login)

module.exports = authRouter;