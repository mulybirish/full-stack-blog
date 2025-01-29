import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function MainLayOut() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainLayOut;
