require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const imageRouter = require("./src/routes/image.routes.js");

app.use(express.json());

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectDB();

app.use("/api/", imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});