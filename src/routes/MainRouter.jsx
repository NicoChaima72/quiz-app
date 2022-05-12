import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
          <Route index element={<MainPage></MainPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
