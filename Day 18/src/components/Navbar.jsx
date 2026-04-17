import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">⚡ChatpataUI</div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
  );
};

export default Navbar;