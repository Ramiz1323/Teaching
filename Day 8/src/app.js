const express = require('express');
const app = express();
const json = express.json();

//Middleware
app.use(json);

// let notes = [];

// app.post('/notes', (req, res) => {
//     const note = req.body.note;
//     notes.push(note);
//     res.status(201).json({
//         message: 'Note created successfully',
//     })
// });

// app.get('/notes', (req, res) => {
//     res.status(200).json({
//         message: 'Notes retrieved successfully',
//         notes
//     })
// });

const notesRouter = require('./routes/notes.route.js');
app.use('/api', notesRouter);


module.exports = app;