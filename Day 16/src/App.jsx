import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    setAllData(data);
    console.log("API key is set", import.meta.env.VITE_API_KEY);
  };

  return (
    <>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition active:scale-90"
        onClick={getData}
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-6 mt-6 justify-center">
        {allData.map(function (elem, idx) {
          return <Card key={idx} data={elem} />;
        })}
      </div>
    </>
  );
};

export default App;
