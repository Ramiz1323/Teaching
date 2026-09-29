/**
 * Day 07 - Server Entry Point
 * ----------------------------
 * Connects to MongoDB database and listens for incoming HTTP requests.
 */

const app = require('./src/app.js');
const connectDB = require('./src/config/database.js');

const PORT = process.env.PORT || 3000;

// Initialize Database connection
connectDB();

// Start Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
