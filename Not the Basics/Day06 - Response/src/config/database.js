/**
 * Database Configuration Module - Day 06
 * ---------------------------------------
 * Encapsulates MongoDB database connection logic using Mongoose.
 */

const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Day06DB';

function connectDB() {
    return mongoose.connect(DB_URI)
        .then(() => {
            console.log('MongoDB connected successfully to:', DB_URI);
        })
        .catch((error) => {
            console.error('Database connection failed:', error.message);
        });
}

module.exports = connectDB;
