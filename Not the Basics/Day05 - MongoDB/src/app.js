/**
 * Day 05 - Express App Definition
 * --------------------------------
 * Core application instance with basic routes and database healthcheck.
 */

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Root greeting endpoint
app.get('/', (req, res) => {
    res.send('Hello Mome!❤️');
});

// Health check endpoint displaying DB state
app.get('/health', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const states = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
    };

    res.status(200).json({
        status: 'ok',
        database: states[dbState] || 'unknown',
        uptime: process.uptime()
    });
});

module.exports = app;
