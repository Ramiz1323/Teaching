const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller.js");

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/logout", authController.logout); 

module.exports = authRouter;