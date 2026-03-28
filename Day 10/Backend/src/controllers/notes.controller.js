const noteModel = require('../models/note.model.js');

async function createNote(req, res) {
    const { title, description } = req.body;
    
    const newNote = await noteModel.create({
        title,
        description
    });

    res.status(201).json({
        message: 'Note created successfully',
        note: newNote
    })
}

async function getNotes(req, res) {
    const notes = await noteModel.find();

    res.status(200).json({
        message: 'Notes fetched successfully',
        notes
    })
}

async function deleteNote(req, res) {
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    
    res.status(200).json({
        message: 'Note deleted successfully'
    })
}

async function updateNote(req, res) {
    const id  = req.params.id;
    const { description } = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(id, { description });
    
    res.status(200).json({
        message: 'Note updated successfully',
        note: updatedNote
    })
}

module.exports = {
    createNote,
    getNotes,
    deleteNote,
    updateNote
}