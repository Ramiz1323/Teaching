import React from 'react'

const Card = (props) => {

    const c1 = Math.floor(Math.random() * 256);
    const c2 = Math.floor(Math.random() * 256);
    const c3 = Math.floor(Math.random() * 256);
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={props.data.image} 
          alt="Product image"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
          New
        </div>
      </div>
      
      <div className="p-5" style={{ backgroundColor: `rgba(${c1}, ${c2}, ${c3})` }}>
        <div className="flex justify-between items-start mb-2">
          <div className="text-xl font-bold text-gray-800">{props.data.title}</div>
          <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {props.data.category}
          </div>
        </div>
        
        <div className="text-gray-600 text-sm mb-4 leading-relaxed">
          {props.data.description}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            ${props.data.price}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card