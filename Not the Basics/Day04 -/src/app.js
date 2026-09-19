/**
 * Create the Server
 * Configure the Server
 */

const express = require('express');
const app = express();

app.use(express.json()); // middleware for parsing json

const notes = [
    { id: 1, note: 'This is a note' }, 
    { id: 2, note: 'This is another note' }
];

app.post('/notes', (req, res) => {
    // console.log(req.body)

    notes.push(req.body)

    res.send("Notes Created")

    console.log(notes)
})

app.get('/', (req, res) => {
    res.send(notes)
})

module.exports = app;