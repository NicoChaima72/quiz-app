import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inCurrentPage, setInCurrentPage] = useState("");

  useEffect(() => {
    if (location.pathname === "/") setInCurrentPage("home");
    else if (
      location.pathname.substring(1, location.pathname.indexOf("/", 1)) ===
      "test"
    )
      setInCurrentPage("test");
    else setInCurrentPage("other");
  }, [location]);

  const handleExitTest = () => {
    if (confirm("Abandonarás el test, ¿estás seguro?")) navigate(-1);
  };

  return (
    <div
      className={`flex ${
        inCurrentPage === "test" ? "justify-end" : "justify-between pt-6 pb-4"
      } items-center`}
    >
      {inCurrentPage === "home" && (
        <img
          src="https://i.ibb.co/1fMYB1m/finance.png"
          alt=""
          className="h-8"
        />
      )}
      {inCurrentPage === "other" && (
        <ArrowBackIcon
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        ></ArrowBackIcon>
      )}
      {/* {inCurrentPage === "test" && (
        <CloseIcon
          sx={{ height: 40, width: 40 }}
          onClick={() => handleExitTest()}
          className="cursor-pointer"
        ></CloseIcon>
      )} */}
      {inCurrentPage !== "test" && (
        <div className="flex items-center space-x-3">
          <MenuIcon className="cursor-pointer"></MenuIcon>
          <Avatar className="cursor-pointer"></Avatar>
        </div>
      )}
    </div>
  );
};

export default Nav;
