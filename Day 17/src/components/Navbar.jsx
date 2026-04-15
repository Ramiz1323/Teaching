import React from 'react'
import { Link } from 'react-router-dom'
import Home from './pages/Home'

const Navbar = () => {
  return (
    <nav className="w-full z-50 
                bg-white/10 backdrop-blur-lg 
                border-b border-white/20 
                shadow-md shadow-black/10">

  <div className="max-w-7xl mx-auto px-6 py-3 
                  flex items-center justify-between">

    {/* Logo */}
    <div className="text-white text-xl font-semibold tracking-wide">
      App
    </div>

    {/* Links */}
    <div className="hidden md:flex gap-8 text-white/80 font-medium">
    <Link to="/"  className="hover:text-white transition"> Home</Link>
    <Link to="/about"  className="hover:text-white transition"> About</Link>
    <Link to="/product"  className="hover:text-white transition"> Product</Link>
    <Link to="/courses"  className="hover:text-white transition"> Courses</Link>
    </div>

    {/* Button */}
    <button className="bg-white/20 backdrop-blur-md 
                       text-white px-4 py-2 rounded-xl 
                       border border-white/20 
                       hover:bg-white/30 transition">
      Login
    </button>

  </div>
</nav>
  )
}

export default Navbar