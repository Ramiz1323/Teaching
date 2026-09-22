const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('MongoDB connected');
    })
}

module.exports = connectDB;