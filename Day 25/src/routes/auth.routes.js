const authRouter = require('express').Router();
const authModel = require('../models/auth.model.js');
const jwt = require('jsonwebtoken');

// POST - /api/auth/register
authRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const isUserExists = await authModel.findOne({ email });

    if (isUserExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await authModel.create({ username, email, password, token:null });

    res.status(201).json({
        message: 'User registered successfully',
        data: user,
    });
});

// POST - /api/auth/login
authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await authModel.findOne({ email });

    if(!user){
        return res.status(400).json({ message: 'Invalid email' });
    }

    if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET);

    const updatedUser = await authModel.findByIdAndUpdate(user._id, { token }, { new: true });

    res.json({ 
        message: 'Login successful', 
        data: {
            username: updatedUser.username,
            email: updatedUser.email,
        }
    });
});

// POST - /api/auth/protected
authRouter.post('/protected', async (req, res) => {
    const { id } = req.body;

    const userToken = await authModel.findById(id, 'token');

    if (userToken.token == null || userToken.token == undefined || userToken.token == '') {
        res.status(401).json({ message: 'Unauthorized' });
    }

    res.status(200).json({ 
        message: 'Protected route accessed successfully' ,
        token: userToken.token
    });

});

module.exports = authRouter;