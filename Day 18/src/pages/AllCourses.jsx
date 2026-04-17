import React from "react";
import { Outlet } from "react-router-dom";

const AllCourses = () => {
  return (
    <>
      <div>AllCourses</div>
      <Outlet />
    </>
  );
};

export default AllCourses;
