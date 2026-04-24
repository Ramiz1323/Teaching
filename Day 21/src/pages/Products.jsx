import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);

  let renderData = (
    <p className="text-center text-gray-500">Loading products...</p>
  );

  if (productData.length > 0) {
    renderData = productData.map(function (product, idx) {
      return (
        <div
          key={idx}
          className="bg-gradient-to-br from-red-950/60 to-black backdrop-blur-lg p-5 rounded-2xl border border-red-900 shadow-lg hover:shadow-red-900/40 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
        >
          {/* Image */}
          <div className="bg-black/40 p-3 rounded-xl mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {product.title}
          </h2>

          {/* Price */}
          <p className="text-red-400 font-bold text-xl mb-1">
            ${product.price}
          </p>

          {/* Category */}
          <p className="text-gray-400 text-sm mb-4 capitalize">
            {product.category}
          </p>

          {/* Button */}
          <Link to={`/products/${product.id}`} className="mt-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md shadow-red-900/30">
            View Details
          </Link>
        </div>
      );
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {renderData}
      </div>
    </>
  );
};

export default Products;
