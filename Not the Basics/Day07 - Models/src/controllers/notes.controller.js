/**
 * Notes Controller - Day 07 Models
 * ---------------------------------
 * Handles business logic for Note CRUD operations with MongoDB via Mongoose.
 * Supports query filtering by category, search text, and completion status.
 */

const Note = require('../models/note.model.js');

// Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const note = await Note.create({ title, content, category });
        
        res.status(201).json({
            success: true,
            message: 'Note created successfully in MongoDB',
            data: note
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Retrieve notes with optional search and category filters
exports.getAllNotes = async (req, res) => {
    try {
        const { category, search, completed } = req.query;
        const filter = {};

        if (category) {
            filter.category = category;
        }

        if (completed !== undefined) {
            filter.isCompleted = completed === 'true';
        }

        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ];
        }

        const notes = await Note.find(filter).sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: notes.length,
            filtersApplied: Object.keys(filter).length > 0,
            data: notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Retrieve note by ID
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ success: false, message: 'Note not found' });
        }
        res.status(200).json({ success: true, data: note });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid Note ID' });
    }
};

// Update note by ID
exports.updateNoteById = async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ success: false, message: 'Note not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Note updated successfully',
            data: updatedNote
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete note by ID
exports.deleteNoteById = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ success: false, message: 'Note not found' });
        }
        res.status(200).json({
            success: true,
            message: 'Note deleted from MongoDB',
            data: deletedNote
        });
    } catch (error) {
        res.status(400).json({ success: false, message: 'Invalid Note ID' });
    }
};
