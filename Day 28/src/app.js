const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/auth.route');
const noteRouter = require('./routes/notes.route');

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/notes', noteRouter);

module.exports = app;