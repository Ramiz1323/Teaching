/**
 * Day 06 - Response Handling & Router Architecture
 * -------------------------------------------------
 * Modularizing routes using Express Router for scalable project organization.
 */

const express = require('express');
const app = express();

const noteRouter = require('./routes/notes.route.js');

// Request logger middleware
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${req.method}] ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
    });
    next();
});

// Built-in middleware to parse incoming request body as JSON
app.use(express.json());

// Mount the modular notes router on the root path
app.use('/', noteRouter);

module.exports = app;
