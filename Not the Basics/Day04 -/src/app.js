/**
 * Day 04 - Express Application & RESTful Routes
 * -----------------------------------------------
 * Configuring the Express Application:
 * - JSON body parser middleware
 * - RESTful endpoints for CRUD on notes
 */

const express = require('express');
const app = express();

// Global Middleware for parsing JSON payloads
app.use(express.json());

// In-memory data store
let notes = [
    { id: 1, note: 'This is a note', createdAt: new Date().toISOString() }, 
    { id: 2, note: 'This is another note', createdAt: new Date().toISOString() }
];

// GET / - Read all notes
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes
    });
});

// POST /notes - Create a new note
app.post('/notes', (req, res) => {
    const { note } = req.body;
    
    if (!note) {
        return res.status(400).json({ success: false, message: "Note content is required" });
    }

    const newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
        note,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        message: "Notes Created",
        data: newNote
    });
});

// DELETE /notes/:id - Delete note by ID
app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const initialLength = notes.length;
    notes = notes.filter(n => n.id !== id);

    if (notes.length === initialLength) {
        return res.status(404).json({ success: false, message: "Note not found" });
    }

    res.status(200).json({ success: true, message: "Note deleted successfully" });
});

module.exports = app;
