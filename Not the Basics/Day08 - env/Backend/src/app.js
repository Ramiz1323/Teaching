const express = require("express");
const app = express();

const noteRouter = require("./routes/note.routes.js");

app.use("/api/notes", noteRouter);

module.exports = app;