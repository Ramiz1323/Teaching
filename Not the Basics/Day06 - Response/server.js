/**
 * Day 06 - Server Startup
 * ------------------------
 * Initializes DB connection before listening on port 3000.
 */

const app = require('./src/app.js');
const connectDB = require('./src/config/database.js');

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Start HTTP listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
