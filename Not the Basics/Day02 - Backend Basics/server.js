const express = require("express")

const app = express(); // Create the server instance

app.get("/", (req, res) => {
    res.send("Hello World" )
})

app.get("/about", (req, res) => {
    res.send("About page")
})

app.get("/home", (req, res) => {
    res.send("Home page")
})

app.listen(3000) // Start the server on port 3000