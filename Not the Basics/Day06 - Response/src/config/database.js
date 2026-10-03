const mongoose = require('mongoose');

function connectDB() {
    return mongoose.connect('mongodb://localhost:27017/test')
        .then(() => {
            console.log('MongoDB connected successfully');
        })
}

module.exports = connectDB;
