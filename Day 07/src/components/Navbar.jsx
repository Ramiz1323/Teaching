import React from "react";
import Title from "./Title";
import Content from "./Content";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl px-6 py-3 text-white">
      <Title />
        <Content />
    </div>
  );
};

export default Navbar;
