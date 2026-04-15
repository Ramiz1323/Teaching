import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="margin-left">
    <div className="bg-linear-to-br from-emerald-500 to-green-700 
                px-6 py-4 rounded-lg 
                flex justify-center items-center 
                font-semibold text-xl text-white 
                shadow-lg shadow-green-900/30 
                border border-white/10 
                backdrop-blur-sm 
                transition-all duration-300 ease-in-out w-40 mb-5">Product</div>
                <Link to="/product/men" className="Men bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Men</Link>
                <Link to="/product/women" className="Women bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md mt-4">Women</Link>
                </div>
  )
}

export default Product