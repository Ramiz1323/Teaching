const notesRouter = require('express').Router();
const { createNote, getNotes, deleteNote, updateNote } = require('../controllers/notes.controller.js');
const { identifyUser } = require('../middlewares/auth.middleware.js');

// notesRouter.use(identifyUser);

notesRouter.post('/create', identifyUser, createNote)
notesRouter.get('/get', getNotes)
notesRouter.delete('/delete/:id',identifyUser, deleteNote)
notesRouter.patch('/update/:id', identifyUser, updateNote)

module.exports = notesRouter;