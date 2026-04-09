import React from "react";

const FormField = ({ type = "text", name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[90%] mb-4 px-4 py-2 rounded-lg 
      bg-white/10 backdrop-blur-md 
      border border-white/20 
      text-white placeholder-gray-300
      focus:outline-none focus:ring-2 focus:ring-purple-500
      transition duration-300"
    />
  );
};

export default FormField;
