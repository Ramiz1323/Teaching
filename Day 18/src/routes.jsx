import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AllCourses from "./pages/AllCourses.jsx";
import Ai from "./pages/Ai.jsx";
import Web from "./pages/Web.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courses",
        element: <AllCourses />,
        children: [
          {
            path: "ai",
            element: <Ai />,
          },
          {
            path: "web",
            element: <Web />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

export default routes;
