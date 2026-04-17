import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Side */}
        <div className="footer-left">
          ⚡ChatpataUI
          <p>Spice up your learning journey 🌶️</p>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <Link to="/courses">
            <button className="explore-btn">Explore Courses</button>
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;