import React, {useContext} from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = () => {

    const data = useContext(UserDataContext)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          ⚡ ChatpataUI , Welcome back! {data}
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
          <li className="hover:text-gray-300 cursor-pointer transition">About</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Courses</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
        </ul>

        {/* Button */}
        <button className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;