import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CoursePage from "../pages/CoursePage";
import MainPage from "../pages/MainPage";
import TestPage from "../pages/TestPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test/:id" exact element={<TestPage></TestPage>}></Route>

        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<MainPage></MainPage>}></Route>
          <Route path="course/:id" element={<CoursePage></CoursePage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
