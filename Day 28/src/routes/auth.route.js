const express = require('express');
const authRouter = express.Router();
const userModel = require('../models/auth.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

authRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    if(await userModel.findOne({ email })) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    try {
        const passwordHash = crypto.createHash('sha256').update(password).digest('hex');
        const user = await userModel.create({ username, email, password: passwordHash });
        res.status(201).json({ message: 'User registered successfully' });
    }catch (error) {
        res.status(400).json({ message: 'Error registering user' });
    }
});

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await crypto.createHash('sha256').update(password).digest('hex') === user.password;
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

        res.cookie('token', token);

        res.status(200).json({ 
            message: 'Login successful',
            data:{
                username: user.username,
                email: user.email
            }
         });
    }catch(error){
        res.status(500).json({ message: 'Error logging in' });
    }
});

authRouter.post('/protected', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ 
            message: 'Protected route accessed successfully', 
            data: decoded
        });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});


module.exports = authRouter;