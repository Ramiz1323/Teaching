import React from "react";

const Content = () => {
  return (
    <div className="lists">
      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-amber-400 transition">Home</li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          About
        </li>
        <li className="cursor-pointer hover:text-amber-400 transition">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Content;
