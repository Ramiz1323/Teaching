import React from "react";

const Sections = ({ children }) => {
  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        { children }
        

      </section>
    </div>
  );
};

export default Sections;
