const app = require('./src/app.js');
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect("mongodb://localhost:27017/test")
    .then(() =>{
        console.log("Connected to database")
    })
}
connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})