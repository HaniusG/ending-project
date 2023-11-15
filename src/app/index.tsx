import "./styles/index.scss";

import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Header from "widgets/Header/Header";
import SideNavBar from "widgets/SideNavBar/SideNavBar";

const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const UserPage = lazy(() => import("pages/UserPage/UserPage"));
const TasksPage = lazy(() => import("pages/TasksPage/TasksPage"));
const BoardsPage = lazy(() => import("pages/BoardsPage/BoardsPage"));

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  return (
    <div className="app dark">
        
         {user ? <Header user={user}/>: null}
         <div style={{display: "flex"}}>
         <BrowserRouter>
         {user ?<SideNavBar/>: null}
          <Suspense fallback={"Loading"}>
            <Routes>
              <Route path="/home" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/user"
                element={<UserPage handleSignOut={handleSignOut} user={user} />}
              />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/boards" element={<BoardsPage />} />
            </Routes>

            <Routes></Routes>
          </Suspense>
        </BrowserRouter>
         </div>
          
      </div>
  );
};

export default App;
