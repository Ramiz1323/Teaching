const noteRouter = require("express").Router();
const noteModel = require("../models/note.model.js");
const jwt = require("jsonwebtoken");

noteRouter.post("/add", async (req, res) => {
  const { title, description } = req.body;
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const note = await noteModel.create({
    title,
    description,
    user: decoded.username,
  });

  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});

module.exports = noteRouter;
