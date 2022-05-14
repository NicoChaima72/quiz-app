import React, { useEffect, useState } from "react";
import AnswersTest from "../components/tests/AnswersTest";
import NavTest from "../components/tests/NavTest";
import QuestionTest from "../components/tests/QuestionTest";
import StatsTest from "../components/tests/StatsTest";
import { getCourseById } from "../services/CoursesService";

const TestPage = () => {
  let interval = null;
  const course = getCourseById(1);
  const totalTime = 20;
  const [points, setPoints] = useState(0);
  const [actualAnswer, setActualAnswer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeReminder, setTimeReminder] = useState(totalTime);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answerShown, setanswerShown] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    interval = setInterval(() => {
      if (Math.floor(timeReminder * 10) > 0)
        setTimeReminder((prev) => prev - 1);
      if (Math.floor(timeReminder * 10) <= 0) {
        setAreDisabled(true);
        setIsTimeOut(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeReminder]);

  const resetTimeReminder = () => {
    setTimeReminder(totalTime);
  };

  const goNextQuestion = () => {
    setAreDisabled(false);
    if (actualAnswer === course.questions.length - 1) setIsFinished(true);
    else setActualAnswer(actualAnswer + 1);
    resetTimeReminder();
    setIsTimeOut(false);
    window.scrollTo(0, 0);
  };

  const handleAnswerSubmit = (isCorrect, e) => {
    e.target.classList.add(
      isCorrect ? "bg-green-700" : "bg-red-700",
      isCorrect ? "hover:bg-green-700" : "hover:bg-red-700"
    );

    clearInterval(interval);
    setAreDisabled(true);
    if (isCorrect) setPoints(points + 999);

    setTimeout(() => {
      goNextQuestion();
    }, 1500);
  };

  if (isFinished) return <StatsTest points={points}></StatsTest>;

  return (
    <div className="">
      <NavTest points={points} timeReminder={timeReminder}></NavTest>
      <QuestionTest
        actualAnswer={actualAnswer}
        question={course.questions[actualAnswer].question}
      ></QuestionTest>
      <AnswersTest
        answers={course.questions[actualAnswer].answers}
        handleAnswerSubmit={handleAnswerSubmit}
        areDisabled={areDisabled}
        isTimeOut={isTimeOut}
        setIsTimeOut={setIsTimeOut}
        resetTimeReminder={resetTimeReminder}
        setAreDisabled={setAreDisabled}
        setActualAnswer={setActualAnswer}
        totalTime
        actualAnswer={actualAnswer}
        setIsFinished={setIsFinished}
        questionsLength={course.questions.length}
        goNextQuestion={goNextQuestion}
      ></AnswersTest>
    </div>
  );
};

export default TestPage;
