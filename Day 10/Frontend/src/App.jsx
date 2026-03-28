import React from "react";
import Card from "./components/Card";

const App = () => {

  let users = ["Srijan", "Dibyo", "Ramiz", "Lathkhor EX", "Father"];

  return (
    <div className="m-10 flex gap-10 flex-col">
      {users.map(function(elem){
        return <Card users = {elem}/>
      })}
    </div>
  );
};

export default App;
