/**
 * Day 01 - Getting Started with Express & Git
 * -------------------------------------------
 * This file demonstrates initializing a minimal Express HTTP server.
 * Express simplifies handling network requests, routes, and responses.
 */

const express = require("express");

// Initialize the Express application instance
const app = express();

// Define port number
const PORT = 3000;

// Root endpoint for testing server connectivity
app.get("/", (req, res) => {
    res.send("Welcome to Backend Development with Express!");
});

// Start listening for incoming network connections
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
