const NoteModel = require("../models/notes.model.js");

async function createNote(req, res) {
  const { title, content } = req.body;
  const newNote = await NoteModel.create({ title, content });
  await newNote.save();

  res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
};

async function getAllNotes(req, res) {
    const notes  = await NoteModel.find();
    res.status(200).json({
        message: "Notes retrieved successfully",
        notes,
    });
}

module.exports = { createNote, getAllNotes };