const express = require('express');
const app = express();
const notesRouter = require('./routes/notes.route.js');
const authRouter = require('./routes/auth.route.js');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/auth', authRouter);

module.exports = app;