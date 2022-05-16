import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inCurrentPage, setInCurrentPage] = useState("");

  useEffect(() => {
    if (location.pathname === "/") setInCurrentPage("home");
    else setInCurrentPage("other");
  }, [location]);

  return (
    <div
      className={`flex ${
        inCurrentPage === "home"
          ? "justify-end pt-6 pb-4"
          : "justify-between pt-6 pb-4"
      } items-center`}
    >
      {inCurrentPage === "other" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowBackIcon
            className="cursor-pointer"
            onClick={() => navigate(-1)}
          ></ArrowBackIcon>
        </motion.div>
      )}
      <div className="flex items-center space-x-3">
        <MenuIcon className="cursor-pointer"></MenuIcon>
        <Avatar className="cursor-pointer"></Avatar>
      </div>
    </div>
  );
};

export default Nav;
