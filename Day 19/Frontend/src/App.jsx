import React, { useState } from "react";
import axios from "axios";
import Sections from "./components/Sections";

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:3000/data");
    setData(res.data);
  }

  return (
    <>
      <h1>App Component</h1>
      <Sections data={data} />
      <button onClick={getData}>Get Data</button>
    </>
  );
};

export default App;
