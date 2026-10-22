const express = require('express');
const app = express();

const noteRouter = require('./routes/notes.route.js')
app.use('/api', noteRouter);

module.exports = app;