import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {

  const [notes, setNotes] = useState([]);

  async function createNote() {
    try {
      const response = await axios.post("http://localhost:5000/api/notes", {
        title: "Sample Note",
        content: "This is a sample note created from the frontend.",
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  async function getNotes() {
    try {
      const response = await axios.get("http://localhost:5000/api/notes");
      setNotes(response.data.notes);
      console.log(response.data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <>
      <h1>Notes</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        createNote();
        }}>
        <button type="submit">Create Note</button>
      </form>

      <button onClick={getNotes}>Get Data</button>
    </>
  );
};

export default App;
