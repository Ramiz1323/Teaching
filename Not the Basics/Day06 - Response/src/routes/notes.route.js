const express = require('express')
const noteRouter = express.Router();

const notes = [];

noteRouter.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: 'Note created successfully',
        notes: notes
    })
})

noteRouter.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

module.exports = noteRouter;