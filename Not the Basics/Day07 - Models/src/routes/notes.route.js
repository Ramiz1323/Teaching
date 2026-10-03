const express = require('express');
const noteModel = require('../models/notes.model');
const noteRouter = express.Router();

noteRouter.use(express.json());

noteRouter.post('/notes', async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({
        title: title,
        description: description
    });

    res.status(201).json({
        message: "Note created successfully",
        newNote: note
    })
});

noteRouter.get('/notes', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully",
        allNotes: notes
    });
});

module.exports = noteRouter;