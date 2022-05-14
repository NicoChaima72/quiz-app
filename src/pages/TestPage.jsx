import React, { useEffect, useState } from "react";
import AnswersTest from "../components/tests/AnswersTest";
import NavTest from "../components/tests/NavTest";
import QuestionTest from "../components/tests/QuestionTest";
import StatsTest from "../components/tests/StatsTest";
import useCountDown from "../hooks/useCountdown";
import { getCourseById } from "../services/CoursesService";

const TestPage = () => {
  const course = getCourseById(1);
  const totalTime = 20900;
  const [timeLeft, { start: startCountdown, pause: pauseCountdown }] =
    useCountDown(totalTime, 100);
  const [points, setPoints] = useState(0);
  const [actualAnswer, setActualAnswer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answerShown, setanswerShown] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);

  useEffect(() => {
    startCountdown();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setAreDisabled(true);
      setIsTimeOut(true);
    }
  }, [timeLeft]);

  const resetCountdown = React.useCallback(() => {
    startCountdown(totalTime);
  }, []);

  const goNextQuestion = () => {
    window.scrollTo(0, 0);
    setAreDisabled(false);
    if (actualAnswer === course.questions.length - 1) setIsFinished(true);
    else {
      setActualAnswer(actualAnswer + 1);
      resetCountdown();
      setIsTimeOut(false);
    }
  };

  const handleAnswerSubmit = (isCorrect, e) => {
    pauseCountdown();
    setAreDisabled(true);

    e.target.classList.add(
      isCorrect ? "bg-green-700" : "bg-red-700",
      isCorrect ? "hover:bg-green-700" : "hover:bg-red-700"
    );
    if (isCorrect) {
      // TODO: CALCULAR PUNTAJE
      setPoints(points + 999);
      setCorrectQuestions(correctQuestions + 1);
    }
    setTimeout(() => {
      goNextQuestion();
    }, 1500);
  };

  if (isFinished) return <StatsTest points={points}></StatsTest>;

  return (
    <div className="">
      <NavTest
        points={points}
        timeLeft={timeLeft}
        totalTime={totalTime}
      ></NavTest>
      <QuestionTest
        actualAnswer={actualAnswer}
        question={course.questions[actualAnswer].question}
      ></QuestionTest>
      <AnswersTest
        answers={course.questions[actualAnswer].answers}
        handleAnswerSubmit={handleAnswerSubmit}
        areDisabled={areDisabled}
        isTimeOut={isTimeOut}
        goNextQuestion={goNextQuestion}
      ></AnswersTest>
    </div>
  );
};

export default TestPage;
