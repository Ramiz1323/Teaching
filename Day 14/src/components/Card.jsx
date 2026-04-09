import React from 'react'

const Card = ({ onRemove, name, imageUrl, desc, role }) => {

  return (
    <div className="w-75 rounded-2xl overflow-hidden 
      bg-white/10 backdrop-blur-lg border border-white/20 
      shadow-xl text-white p-4">

      <div className="w-full h-50 overflow-hidden rounded-xl mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-xl object-top"
        />
      </div>

      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-300 mt-1">{role}</p>

      <p className="text-sm mt-3 leading-relaxed text-gray-200">
        {desc}
      </p>
      <button
        onClick={onRemove}
        className="absolute bottom-3 right-3 px-3 py-1 text-xs 
        bg-red-500/80 hover:bg-red-600 
        rounded-lg backdrop-blur-md transition duration-300"
      >
        Remove
      </button>
    </div>
  );
}

export default Card;