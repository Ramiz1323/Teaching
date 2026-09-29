/**
 * Database Configuration - Day 07 Models
 * ---------------------------------------
 * Establishes MongoDB connection with Mongoose and includes connection lifecycle events.
 */

const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/TeachingModelsDB';

function connectDB() {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log('MongoDB connected successfully to:', MONGO_URI);
        })
        .catch((err) => {
            console.error('MongoDB connection failed:', err.message);
        });
}

// Connection event listeners for debugging
mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection lost!');
});

module.exports = connectDB;
