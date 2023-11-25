import "./styles/index.scss";

import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Header from "widgets/Header/Header";
import SideNavBar from "widgets/SideNavBar/ui/SideNavBar";
import { CommentProps } from "pages/TasksPage/TaksPage.interface";
import { RootState } from "entites/store";
import { useSelector } from "react-redux";
import { setLogin } from "entites/user/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const UserPage = lazy(() => import("pages/UserPage"));
const TasksPage = lazy(() => import("pages/TasksPage"));
const BoardsPage = lazy(() => import("pages/BoardsPage"));

const App: React.FC = () => {

  const dispatch = useDispatch()
  
  const isLoggedIn = useSelector((state: RootState) => {
    return state.user.isLoggedIn;
  });

  const [user, setUser] = useState<User | null>(null);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
    dispatch(setLogin(false))
  };
  console.log(user);
  
 

  return (
    <div className="app dark">
      {isLoggedIn ? <Header user={user} handleSignOut={handleSignOut} /> : null}
      <div style={{ display: "flex" }}>
        {isLoggedIn ? <SideNavBar /> : null}
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
