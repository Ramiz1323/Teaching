const express = require('express');
const app = express();

const noteRouter = require('./routes/notes.route.js')
app.use('/', noteRouter);

module.exports = app;