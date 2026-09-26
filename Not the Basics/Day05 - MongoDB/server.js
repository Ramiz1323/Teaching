/**
 * Day 05 - MongoDB & Mongoose Database Connection
 * -------------------------------------------------
 * Demonstrating how to connect an Express server to a MongoDB database
 * using Mongoose ODM (Object Data Modeling) library.
 */

const app = require("./src/app.js");
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/MomeDB";
const PORT = process.env.PORT || 3000;

/**
 * Connect to MongoDB database
 * Handles asynchronous connection lifecycle and logs status
 */
function connectToDb() {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully at:", MONGO_URI);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err.message);
    });
}

// Invoke database connection
connectToDb();

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
