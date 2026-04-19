import express from "express";
const app = express();
const PORT = 3000;

app.get("/data", (req, res) => {
  res.status(200).json({ 
    message: "Course details fetched successfully",
    data:{
        course: "React",
        instructor: "Ramiz",
        duration: "4 weeks",
        price: 2000
    }
   });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
