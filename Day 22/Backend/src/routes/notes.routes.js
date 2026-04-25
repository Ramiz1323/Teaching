const express = require('express');
const noteRouter = express.Router();
const { createNote, getAllNotes } = require('../controllers/notes.controller.js');

/**
 * @route POST /api/notes
 * @description Create a new note
 */
noteRouter.post("/notes", createNote);

/**
 * @route GET /api/notes
 * @description Get all notes
 */
noteRouter.get("/notes", getAllNotes);


module.exports = noteRouter;