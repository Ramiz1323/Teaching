/**
 * Day 07 - Express Application
 * -----------------------------
 * Configures express middleware and mounts models-backed notes router.
 */

const express = require('express');
const app = express();

const notesRouter = require('./routes/notes.route.js');

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Mount Note endpoints
app.use('/api', notesRouter);

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Day 07 - Mongoose Models API is active',
        docs: '/api/notes'
    });
});

module.exports = app;
