require('dotenv').config();
const app = require("./src/app");
const port = process.env.PORT || 3001;
const connectDB = require('./src/config/db');

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});