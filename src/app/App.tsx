import "./styles/index.scss";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const UserPage = lazy(() => import("pages/UserPage"));
const TasksPage = lazy(() => import("pages/TasksPage"));
const BoardsPage = lazy(() => import("pages/BoardsPage"));

const App: React.FC = () => {
  return (
    <div className="app dark">
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/boards" element={<BoardsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
