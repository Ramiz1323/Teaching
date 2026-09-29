/**
 * Day 07 - Note Model Definition
 * -------------------------------
 * Defines the Mongoose schema and model for Notes.
 * Schemas map directly to MongoDB collections and define the shape of documents.
 */

const mongoose = require('mongoose');

// Define Schema for Note documents
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Note title is required'],
            trim: true,
            maxlength: [100, 'Title cannot exceed 100 characters']
        },
        content: {
            type: String,
            required: [true, 'Note content is required'],
            trim: true
        },
        category: {
            type: String,
            enum: ['work', 'personal', 'study', 'general'],
            default: 'general'
        },
        isCompleted: {
            type: Boolean,
            default: false
        }
    },
    {
        // Automatically adds createdAt and updatedAt timestamps
        timestamps: true
    }
);

// Create and export the Note Mongoose model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
