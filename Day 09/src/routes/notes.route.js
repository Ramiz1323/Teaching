const express = require('express');
const notesRouter = express.Router();
const { createNote, getNotes } = require('../controllers/notes.controller');

notesRouter.post("/notes", createNote);
notesRouter.get("/notes", getNotes);

module.exports = notesRouter;