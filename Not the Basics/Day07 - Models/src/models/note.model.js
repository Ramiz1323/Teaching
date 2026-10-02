/**
 * Day 07 - Note Model Definition
 * -------------------------------
 * Defines the Mongoose schema and model for Notes.
 * Includes pre-save hooks and text index for full-text search.
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

// Pre-save middleware to capitalize the first letter of title
noteSchema.pre('save', function (next) {
    if (this.title && typeof this.title === 'string') {
        this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
    }
    next();
});

// Index title for faster search lookups
noteSchema.index({ title: 'text', content: 'text' });

// Create and export the Note Mongoose model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
