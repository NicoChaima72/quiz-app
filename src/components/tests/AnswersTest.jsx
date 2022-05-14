import React from "react";

const AnswersTest = ({
  answers,
  handleAnswerSubmit,
  areDisabled,
  isTimeOut,
  goNextQuestion,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-4 pb-32">
        {answers.map((answer, index) => (
          <button
            type="button"
            key={answer.text}
            onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
            className={` py-3 px-6 border-2 border-sky-500 rounded-full disabled:cursor-not-allowed`}
            disabled={areDisabled}
          >
            {answer.text}
          </button>
        ))}
      </div>

      {isTimeOut && (
        <div className="fixed bg-red-500 py-10 bottom-0 inset-x-0">
          <div className="flex items-center justify-between container">
            <p>Se te ha acabado el tiempo.</p>
            <button
              className="border py-2 px-6 rounded hover:bg-red-600"
              onClick={goNextQuestion}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswersTest;
