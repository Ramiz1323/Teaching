import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white flex items-center justify-center px-6">
      
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-red-500">Your Store</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Discover premium products with a bold experience. 
          Designed for performance, styled with elegance.
        </p>

        {/* Button */}
        <button 
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg shadow-red-900/40 hover:scale-105 cursor-pointer active:scale-95"
          onClick={() => navigate('/products')}
        >
          Explore Products
        </button>

        {/* Optional Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          
          <div className="bg-red-950/40 backdrop-blur-md p-6 rounded-2xl border border-red-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Premium Quality</h3>
            <p className="text-gray-400 text-sm">
              Only the best curated products for you.
            </p>
          </div>

          <div className="bg-red-950/40 backdrop-blur-md p-6 rounded-2xl border border-red-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Get your products delivered quickly.
            </p>
          </div>

          <div className="bg-red-950/40 backdrop-blur-md p-6 rounded-2xl border border-red-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2 text-red-400">Best Deals</h3>
            <p className="text-gray-400 text-sm">
              Affordable prices with exclusive offers.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;