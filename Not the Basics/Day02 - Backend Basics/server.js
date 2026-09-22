/**
 * Day 02 - Backend Basics & HTTP Routing
 * ---------------------------------------
 * Exploring basic Express routing mechanism and handling multiple HTTP GET endpoints.
 */

const express = require("express");

// Create the server instance
const app = express();
const PORT = 3000;

/**
 * Route: GET /
 * Description: Homepage / Base route
 */
app.get("/", (req, res) => {
    res.send("Hello World");
});

/**
 * Route: GET /about
 * Description: Information about the service or teaching module
 */
app.get("/about", (req, res) => {
    res.send("About page");
});

/**
 * Route: GET /home
 * Description: Dedicated home landing route
 */
app.get("/home", (req, res) => {
    res.send("Home page");
});

// Start the server on designated port
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
