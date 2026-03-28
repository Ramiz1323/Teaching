import React from "react";

const Card = (props) => {

  console.log(props)

  return (
    <div className="Card border-2 border-red-500 p-4 bg-white text-black h-20 w-80 text-3xl font-bold ">
      <h1>{props.users}</h1>
    </div>
  );
};

export default Card;
