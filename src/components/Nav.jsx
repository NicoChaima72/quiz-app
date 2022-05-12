import { Avatar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <Avatar className="cursor-pointer"></Avatar>
      <MenuIcon className="cursor-pointer"></MenuIcon>
    </div>
  );
};

export default Nav;
