const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})

app.post('/', (req,res)=>{
    res.send("Hello World")
})