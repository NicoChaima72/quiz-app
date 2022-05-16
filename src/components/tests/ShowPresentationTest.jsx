import React, { useEffect } from "react";
import { motion } from "framer-motion";
import useCountDown from "../../hooks/useCountdown";

const ShowPresentationTest = ({ setShowPresentation }) => {
  const [timeLeft, { start }] = useCountDown(3000, 1000);

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setShowPresentation(false);
  }, [timeLeft]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 2 }}
    >
      <div className="h-screen flex items-center justify-center text-3xl flex-col">
        <p>El test comenzará en</p>
        <p className="text-4xl">{timeLeft / 1000}</p>
      </div>
    </motion.div>
  );
};

export default ShowPresentationTest;
