import React from "react";
import { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/productApi";

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProductData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductDataContext.Provider value={productData}>
        {children}
      </ProductDataContext.Provider>
    </>
  );
};

export default ProductContext;