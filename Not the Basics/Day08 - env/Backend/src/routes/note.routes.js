const express = require("express");
const noteModel = require("../models/note.model.js");
const noteRouter = express.Router();

noteRouter.use(express.json());


/**
 * POST - /api/notes/create
 * Create a note
 */
noteRouter.post('/create', async (req, res) => {
    const { title, description } = req.body;

    const newNote = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: "Note created successfully",
        newNote
    })
})

/**
 * GET - /api/notes/all
 * Get all notes
 */
noteRouter.get('/all', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetched successfully",
        allNotes: notes
    })
})


module.exports = noteRouter;
