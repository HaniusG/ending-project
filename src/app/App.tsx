import "./styles/index.scss";

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Header from "widgets/Header/Header";
import SideNavBar from "widgets/SideNavBar/SideNavBar";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));
const TasksPage = lazy(() => import("pages/TasksPage/TasksPage"));
const BoardsPage = lazy(() => import("pages/BoardsPage/BoardsPage"));

const App: React.FC = () => {
  

  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<CommentProps[]>()
  const [isClicked, setIsClicked] = useState<boolean>(false)


  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  const handleCommentShow = (comments: CommentProps[], isClicked: boolean) =>{

    setIsClicked(isClicked)
    setComments(comments)
  }
  

  return (
    <div className="app dark">
      {user ? <Header user={user} handleSignOut={handleSignOut} /> : null}
      <div style={{ display: "flex" }}>
        {user ? <SideNavBar /> : null}
        <Suspense fallback={"Loading"}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/user"
              element={<UserPage handleSignOut={handleSignOut} user={user} />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/tasks" element={<TasksPage/>}/>
            <Route path="/boards" element={<BoardsPage/>} />
          </Routes>

        </Suspense>
      </div>
    </div>
  );
};

export default App;
