const noteModel = require("../models/notes.model.js");

function createNote(req, res) {
  const { note } = req.body;

  const newNote = new noteModel({ note });
  newNote.save();

  res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
}

async function getNotes(req, res) {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
}

// function getNotes(req, res) {
//     noteModel.find().then((notes) => {
//         res.status(200).json({
//             message: "Notes fetched successfully",
//             notes,
//         })
//     })
// }

module.exports = {
  createNote,
  getNotes,
};
