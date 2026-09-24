/**
 * Day 03 - Introduction to Postman & Testing APIs
 * ------------------------------------------------
 * This module introduces testing HTTP verbs (GET, POST) using Postman
 * and working with JSON request bodies via body-parser middleware.
 */

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
// Note: Without express.json(), req.body will be undefined!
app.use(express.json());

// In-memory data store for notes
const notes = [
    { id: 1, note: 'This is a note' }, 
    { id: 2, note: 'This is another note' }
];

/**
 * POST /notes
 * Creates a new note by reading JSON data from req.body
 */
app.post('/notes', (req, res) => {
    const { note } = req.body;
    
    // Create new note item with auto-increment ID
    const newNote = {
        id: notes.length + 1,
        note: note || req.body.note || 'Untitled note'
    };

    notes.push(newNote);

    res.status(201).json({
        message: "Note Created Successfully",
        createdNote: newNote,
        totalNotes: notes.length
    });
});

/**
 * GET /
 * Fetches the complete list of in-memory notes
 */
app.get('/', (req, res) => {
    res.status(200).json(notes);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
