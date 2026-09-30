/**
 * Notes Router - Day 07 Models
 * -----------------------------
 * Maps HTTP verbs to corresponding note controller actions.
 */

const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes.controller.js');

// Route definitions
router.post('/notes', notesController.createNote);
router.get('/notes', notesController.getAllNotes);
router.get('/notes/:id', notesController.getNoteById);

module.exports = router;
