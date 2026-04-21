import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import { UserDataContext } from "./context/UserContext";

const App = () => {

  const data = useContext(UserDataContext)

  return (
    <div className="app">
      <Navbar />

      <Sections>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Stunning UI ⚡
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Create modern, responsive and beautiful interfaces with ease using
          ChatpataUI components.
        </p>
        <button className="px-6 py-3 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md hover:bg-white/30 transition">
          {data}, Get Started
        </button>
      </Sections>

      <Footer />
    </div>
  );
};

export default App;
