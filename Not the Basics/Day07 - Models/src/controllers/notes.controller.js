/**
 * Notes Controller - Day 07 Models
 * ---------------------------------
 * Handles business logic for Note CRUD operations with MongoDB via Mongoose.
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

// Retrieve all notes
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: notes.length,
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
