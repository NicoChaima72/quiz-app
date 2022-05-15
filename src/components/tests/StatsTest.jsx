import { Avatar } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const StatsTest = ({ points, countCorrectQuestions, questions }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end pt-6">
        <button
          className="rounded py-2 pl-5 pr-3 shadow-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-between space-x-2"
          onClick={() => navigate(-1, { replace: true })}
        >
          <p>Continuar</p>
          <ArrowForwardIosIcon
            sx={{ width: 17, height: 17 }}
          ></ArrowForwardIosIcon>
        </button>
      </div>
      <h2 className="text-center text-3xl pb-10 mt-5">Resultados</h2>

      <div className="absolute bg-gray-800 top-[155px] inset-x-0 rounded-t-[35px] min-h-screen py-10 pb-20 px-4 border-t-2 border-sky-500">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <div className="flex space-x-3">
              <Avatar sx={{ width: 48, height: 48 }}></Avatar>
              <div className="">
                <h4 className="text-lg">Tú</h4>
                <p className="text-xs text-gray-400 leading-none">
                  {`Correctas: ${countCorrectQuestions}/${questions.length}`}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-lg text-gray-400">{points} ptos</p>
              {/* <EmojiEventsIcon sx={{ width: 35, height: 35 }}></EmojiEventsIcon> */}
              <div
                className={`text-xl border-2 rounded-full w-10 h-10 relative mx-auto`}
              >
                <div
                  className="absolute top-[50%] left-[50%] p-0 m-0"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  5
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-600 mt-5 mb-4"></div>
          <h3 className="text-gray-400 mb-3">Top 3</h3>
          <div className="space-y-3">
            {[0, 1, 2].map((i, index) => (
              <div
                className="flex justify-between items-center relative"
                key={index}
              >
                <div className="flex space-x-3">
                  <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                  <div className="">
                    <h4 className="text">Nicolas Chaima</h4>
                    <p className="text-xs text-gray-400 leading-none">
                      4350 puntos
                    </p>
                  </div>
                </div>
                <div className="flex items-center relative">
                  <p
                    className="absolute text-gray-900 text-xl top-[50%] left-[50%] font-extrabold"
                    style={{ transform: "translate(-50%, -60%)" }}
                  >
                    {index + 1}
                  </p>
                  <EmojiEventsIcon
                    sx={{ width: 45, height: 44 }}
                  ></EmojiEventsIcon>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-gray-600 mt-7 mb-4"></div>
          <h3 className="text-gray-400 mb-3">Ranking</h3>
          <div className="space-y-3">
            {[0, 1, 2, 3, 4, 5, 6].map((i, index) => (
              <div
                className="flex justify-between items-center relative"
                key={index}
              >
                <div className="flex space-x-3">
                  <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                  <div className="">
                    <h4 className="text">Nicolas Chaima</h4>
                    <p className="text-xs text-gray-400 leading-none">
                      4350 puntos
                    </p>
                  </div>
                </div>
                <div className="">
                  <div
                    className={`text-xl border-2 border-gray-500 rounded-full w-10 h-10 relative mx-auto`}
                  >
                    <div
                      className="absolute top-[50%] left-[50%] p-0 m-0"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      {index + 4}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTest;
