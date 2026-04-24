import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { id } = useParams();
  let selectedProduct = "";

  if (productData.length > 0) {
    selectedProduct = productData.find(
      (product) => product.id === parseInt(id),
    );
  }
  
  return (
    <>
      {selectedProduct ? (
        <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white px-6 py-10 flex items-center justify-center">
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-red-950/40 backdrop-blur-lg border border-red-900 rounded-2xl p-8 shadow-xl">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-black/40 rounded-xl p-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-72 h-72 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {selectedProduct.title}
              </h1>

              {/* Category */}
              <p className="text-red-400 uppercase text-sm tracking-wide mb-2">
                {selectedProduct.category}
              </p>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Price */}
              <p className="text-3xl font-extrabold text-red-500 mb-6">
                ${selectedProduct.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition hover:scale-105 shadow-lg shadow-red-900/40">
                  Add to Cart
                </button>

                <button className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20 text-lg">
          Product not found.
        </p>
      )}
    </>
  );
};

export default ProductDetails;
