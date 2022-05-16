import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CoursePage from "../pages/CoursePage";
import MainPage from "../pages/MainPage";
import TestPage from "../pages/TestPage";

const MainRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/test/:id" exact element={<TestPage></TestPage>}></Route>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path="course/:id" element={<CoursePage></CoursePage>}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default MainRouter;
