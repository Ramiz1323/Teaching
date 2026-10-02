const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/test")
    .then(() =>{
        console.log("Connected to database")
    })
}

module.exports = connectDB;