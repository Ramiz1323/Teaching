import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
                bg-linear-to-br from-green-900 via-emerald-700 to-green-500 px-6">

  <div className="bg-white/10 backdrop-blur-xl 
                  border border-white/20 
                  shadow-xl shadow-black/20 
                  rounded-3xl p-10 text-center max-w-md w-full">

    <h1 className="text-6xl font-bold text-white mb-4">404</h1>

    <p className="text-white/80 text-lg mb-6">
      Oops! The page you’re looking for doesn’t exist.
    </p>

    <Link to="/" 
       className="inline-block bg-white/20 backdrop-blur-md 
                  text-white px-6 py-3 rounded-xl 
                  border border-white/20 
                  hover:bg-white/30 transition-all duration-300">
      Go Home
    </Link>

  </div>
</div>
  )
}

export default NotFound