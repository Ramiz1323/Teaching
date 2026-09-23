/**
 * Day 02 - Backend Basics & HTTP Routing
 * ---------------------------------------
 * Exploring basic Express routing mechanism and handling multiple HTTP GET endpoints.
 */

const express = require("express");

// Create the server instance
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

/**
 * Route: GET /
 * Description: Homepage / Base route
 */
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello World from Express Server"
    });
});

/**
 * Route: GET /about
 * Description: Information about the service or teaching module
 */
app.get("/about", (req, res) => {
    res.status(200).json({
        status: "success",
        topic: "Backend Basics",
        session: "Day 02"
    });
});

/**
 * Route: GET /home
 * Description: Dedicated home landing route
 */
app.get("/home", (req, res) => {
    res.status(200).send("Home page");
});

// Fallback 404 Handler for undefined routes
app.use((req, res) => {
    res.status(404).json({
        error: "Route Not Found",
        requestedUrl: req.originalUrl,
        timestamp: new Date().toISOString()
    });
});

// Start the server on designated port
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
