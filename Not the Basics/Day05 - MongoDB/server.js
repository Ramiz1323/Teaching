const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect("mongodb://localhost:27017/MomeDB").then(() => {
    console.log("Connected to database");
  });
}

connectToDb();

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
