const express = require('express');
const authRouter = express.Router();
const AuthModel = require('../models/auth.model.js');
const jwt = require('jsonwebtoken');

authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    const isUserExists = await AuthModel.findOne({ email });

    if (isUserExists) {
        return res.status(400).json({
            message: 'User already exists'
        })
    }

    const user = await AuthModel.create({ name, email, password });

    const token = jwt.sign({
        id: user._id,
        name: user.name,
    }, process.env.JWT_SECRET);

    res.status(201).json({
        message: 'User registered successfully',
        data: user,
        token
    });
})

module.exports = authRouter;