import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AnswersTest from "../components/tests/AnswersTest";
import NavTest from "../components/tests/NavTest";
import QuestionTest from "../components/tests/QuestionTest";
import ShowPresentationTest from "../components/tests/ShowPresentationTest";
import StatsTest from "../components/tests/StatsTest";
import useCountDown from "../hooks/useCountdown";
import { getCourseById } from "../services/CoursesService";
import { calculatePoints } from "../utils/utils";

const TestPage = () => {
  window.onbeforeunload = function () {
    return "Are you sure that you want to leave this page?";
  };
  const course = getCourseById(1);
  const totalTime = 20900;
  const [timeLeft, { start: startCountdown, pause: pauseCountdown }] =
    useCountDown(totalTime, 100);
  const [showPresentation, setShowPresentation] = useState(true);
  const [points, setPoints] = useState(0);
  const [actualAnswer, setActualAnswer] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answerShown, setanswerShown] = useState(false);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);

  useEffect(() => {
    if (!showPresentation) startCountdown();
  }, [showPresentation]);

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
      setPoints(points + calculatePoints(500, 1000, totalTime, timeLeft, 3000));
      setCorrectQuestions(correctQuestions + 1);
    }
    setTimeout(() => {
      goNextQuestion();
    }, 1500);
  };

  if (isFinished)
    return (
      <StatsTest
        points={points}
        countCorrectQuestions={correctQuestions}
        questions={course.questions}
      ></StatsTest>
    );

  if (showPresentation)
    return (
      <ShowPresentationTest
        setShowPresentation={setShowPresentation}
      ></ShowPresentationTest>
    );

  return (
    <motion.div
      className="bg-[#0F172A] min-h-screen w-full text-white container mx-auto relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
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
    </motion.div>
  );
};

export default TestPage;
