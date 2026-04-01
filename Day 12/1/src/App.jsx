import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);

  const Increase = () => {
    setNum(num + 10);
  };

  const Decrease = () => {
    setNum(num - 10);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default App;
