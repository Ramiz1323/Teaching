const mongoose = require('mongoose');

const noteSchema =  mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
})

const noteModel = mongoose.model('notes', noteSchema);

module.exports = noteModel;