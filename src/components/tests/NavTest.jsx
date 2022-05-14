import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

const NavTest = ({ points, timeReminder }) => {
  const navigate = useNavigate();

  const handleExitTest = () => {
    if (confirm("Abandonarás el test, ¿estás seguro?")) navigate("/course/1");
  };

  return (
    <div className="grid items-start grid-cols-3 py-4 pt-6">
      <div className="flex items-center space-x-1 mt-2">
        <EmojiEventsIcon></EmojiEventsIcon>
        <p>{points}</p>
      </div>
      <div
        className={`${
          Math.floor(timeReminder) > 12
            ? "border-green-500"
            : Math.floor(timeReminder) > 6
            ? "border-yellow-500"
            : "border-red-500"
        } text-4xl border-2 rounded-full w-20 h-20 relative mx-auto`}
      >
        <div
          className="absolute top-[50%] left-[50%] p-0 m-0"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {Math.floor(timeReminder)}
        </div>
      </div>
      <CloseIcon
        className="cursor-pointer ml-auto"
        sx={{ width: 43, height: 43 }}
        onClick={handleExitTest}
      ></CloseIcon>
    </div>
  );
};

export default NavTest;