import { motion } from "framer-motion";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav.jsx";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-[#0F172A] min-h-screen w-full text-white container mx-auto relative">
      <Nav></Nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.2 }}
      >
        <div className="pb-24 pt-2 min-h-screen">
          <Outlet></Outlet>
        </div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
