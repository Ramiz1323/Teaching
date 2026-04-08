import React, { useState } from "react";
import Card from "./components/Card.jsx";
import New from "./components/New.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [name, setName] = useState("");

  const [allNames, setAllNames] = useState(["Ramiz"]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newNames = [...allNames, name];
    setAllNames(newNames);
    console.log(newNames);
    setName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      {allNames.map(function (elem, idx) {
        return <Card key={idx} name={elem} />;
      })}

      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
