const express = require('express');
const app = express();
const noteRouter = require('./routes/notes.routes.js');

app.use(express.json());


app.use('/api', noteRouter);


module.exports = app;