const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    username: String,
    email:{
        type: String,
        unique: [true, 'Email already exists']
    },
    password: String,
    token: String
});

const authModel = mongoose.model('Auth', authSchema);

module.exports = authModel;