const express = require('express');
const app = express();
const cors = require('cors');
const noteRouter = require('./routes/notes.routes.js');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    withCredentials: true
}));

app.use('/api', noteRouter);


module.exports = app;