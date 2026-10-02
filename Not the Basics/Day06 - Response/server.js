const app = require('./src/app.js');
const mongoose = require('mongoose');
const connectDB  = require('./src/config/database.js');

connectDB(); //Connecting to DB

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})