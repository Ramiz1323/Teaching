import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Men from "./components/pages/Men";
import Women from "./components/pages/Women";
import Courses from "./components/pages/Courses";
import AnyCourse from "./components/pages/AnyCourse";
import CourseDetails from "./components/pages/CourseDetails";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>

        {/* Basic Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>

        {/* Nested Routes */}
        <Route path="/product/men" element={<Men/>}/>
        <Route path="/product/women" element={<Women/>}/>

        {/* Dynamic Routes */}
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:courseId" element={<AnyCourse/>}/>
        <Route path="/courses/:courseId/details" element={<CourseDetails/>}/>

        {/* Not Found Route */}
        <Route path="/*" element={<NotFound/>}/>

      </Routes>

    </>
  );
};

export default App;
