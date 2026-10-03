const express = require('express');
const noteRouter = express.Router();

let notes = [];

/**
 * POST /notes
 * Create a new note
 */
noteRouter.post('/notes', (req, res) => {
    const { title, content } = req.body;
    
    const newNote = {
        id: notes.length + 1,
        title: title || 'Untitled',
        content: content || req.body.note || '',
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        message: 'Note created successfully',
        data: newNote
    });
});

/**
 * GET /notes
 * Retrieve all notes
 */
noteRouter.get('/notes', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        count: notes.length,
        data: notes
    });
});

/**
 * PATCH /notes/:id
 * Partially update an existing note
 */
noteRouter.patch('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    const note = notes.find(n => n.id === noteId);

    if (!note) {
        return res.status(404).json({
            success: false,
            message: `Note with ID ${noteId} not found`
        });
    }

    if (req.body.title !== undefined) note.title = req.body.title;
    if (req.body.content !== undefined) note.content = req.body.content;
    note.updatedAt = new Date().toISOString();

    res.status(200).json({
        success: true,
        message: 'Note updated successfully',
        data: note
    });
});

/**
 * DELETE /notes/:id
 * Remove a note by ID
 */
noteRouter.delete('/notes/:id', (req, res) => {
    const noteId = parseInt(req.params.id, 10);
    const index = notes.findIndex(n => n.id === noteId);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: `Note with ID ${noteId} not found`
        });
    }

    const [deletedNote] = notes.splice(index, 1);

    res.status(200).json({
        success: true,
        message: 'Note deleted successfully',
        data: deletedNote
    });
});

module.exports = noteRouter;
