import "./styles/index.scss";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainPage = lazy(() => import('pages/MainPage'))
const StudentPage = lazy(() => import('pages/StudentPage'))
const TeacherPage = lazy(() => import('pages/TeacherPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))





const App: React.FC = () => {
 

  return (
    <BrowserRouter>
        <Suspense fallback={"Loading"}>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/teacher' element={<TeacherPage/>} />
            <Route path='/togin' element={<LoginPage/>} />
            <Route path='/ttudent' element={<StudentPage/>} />


          </Routes>
        </Suspense>
    </BrowserRouter>
  );
};

export default App;
