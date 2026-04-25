require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 3000;
const connectDB = require('./src/config/database');

connectDB(); // Connect to MongoDB

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});