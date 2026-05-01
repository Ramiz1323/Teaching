const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, 'Email already exists']
    },
    password: String
});

const AuthModel = mongoose.model('Auth', authSchema);

module.exports = AuthModel;