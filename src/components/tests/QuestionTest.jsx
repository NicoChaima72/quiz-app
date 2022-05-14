import React from "react";

const QuestionTest = ({ actualAnswer, question }) => {
  return (
    <>
      <div className="flex justify-center">
        <h4 className="text-center bg-gray-800 mt-6 inline py-2 px-4 rounded-full">
          Pregunta {actualAnswer + 1}
        </h4>
      </div>
      <p className="text-center px-2 my-8 text-xl">{question}</p>
    </>
  );
};

export default QuestionTest;
