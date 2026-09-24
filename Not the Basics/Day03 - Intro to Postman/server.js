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
app.use(express.json());

// In-memory data store for notes
const notes = [
    { id: 1, note: 'This is a note' }, 
    { id: 2, note: 'This is another note' }
];

/**
 * POST /notes
 * Creates a new note with input validation
 */
app.post('/notes', (req, res) => {
    const { note } = req.body;

    // Validate payload existence
    if (!note || typeof note !== 'string' || note.trim().length === 0) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The 'note' field is required and must be a non-empty string."
        });
    }
    
    const newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        note: note.trim(),
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);

    res.status(201).json({
        message: "Note Created Successfully",
        createdNote: newNote,
        totalNotes: notes.length
    });
});

/**
 * GET /notes/:id
 * Fetches a single note by numerical identifier
 */
app.get('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    
    if (isNaN(noteId)) {
        return res.status(400).json({ error: "Invalid note ID parameter" });
    }

    const foundNote = notes.find(n => n.id === noteId);
    if (!foundNote) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json(foundNote);
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
