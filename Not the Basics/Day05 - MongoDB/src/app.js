const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Mome!❤️')
})

module.exports = app;