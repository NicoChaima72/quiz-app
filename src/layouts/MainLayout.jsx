import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav.jsx";

const MainLayout = () => {
  return (
    <div className="">
      <Nav></Nav>
      <div className="pb-24 mt-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
