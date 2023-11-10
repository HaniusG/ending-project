import "./styles/index.scss";

import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainPage = lazy(() => import('pages/MainPage'))
const StudentPage = lazy(() => import('pages/StudentPage'))
const TeacherPage = lazy(() => import('pages/TeacherPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))
const UserPage = lazy(() => import('pages/UserPage/UserPage'))
const TasksPage = lazy(() => import('pages/TasksPage/TasksPage'))
const BoardsPage = lazy(() => import('pages/BoardsPage/BoardsPage'))





const App: React.FC = () => {
 

  return (
    <div className="app dark">
      <BrowserRouter>
        <Suspense fallback={"Loading"}>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/user' element={<UserPage/>} />
            <Route path='/tasks' element={<TasksPage/>} />
            <Route path='/boards' element={<BoardsPage/>} />
          </Routes>
        </Suspense>
    </BrowserRouter>
    </div>
    
  );
};

export default App;
