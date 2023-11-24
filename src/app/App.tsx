import "./styles/index.scss";

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Header from "widgets/Header/Header";
import SideNavBar from "widgets/SideNavBar/ui/SideNavBar";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";

const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const UserPage = lazy(() => import("pages/UserPage"));
const TasksPage = lazy(() => import("pages/TasksPage"));
const BoardsPage = lazy(() => import("pages/BoardsPage"));

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<CommentProps[]>();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

 

  return (
    <div className="app dark">
      {user ? <Header user={user} handleSignOut={handleSignOut} /> : null}
      <div style={{ display: "flex" }}>
        {user ? <SideNavBar /> : null}
        <Suspense fallback={"Loading"}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/user" element={<UserPage user={user} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/boards" element={<BoardsPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
