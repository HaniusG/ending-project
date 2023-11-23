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
  const tasks = [
    {
      id: 1,
      taskState: "Backlog",
      tasks: [
        {
          id: 1,
          name: "planning",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
              },
              text: "I think this looks cool, its the best task i have ever done, the thing is cool, the best part is the lorem for a while thats why this",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "Mike M.",
                    image: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  text: "No, because youre thinking very simply and awkwardm, you dont think that this is too mucj",
                  date: new Date().toDateString(),
                },
                {
                  id: 2,
                  author: {
                    id: 34,
                    name: "Esim Inch",
                    image: "https://images.ctfassets.net/cnu0m8re1exe/621LK0hTGKrRBzXdnqiuuE/e82b6415d8dec51658f2acd6ea6b70b7/viking.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
                  },
                  text: "Get out then",
                  date: new Date().toDateString(),
                },
                
              ],
            },
            {
              id: 2,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
              },
              text: "I think this looks cool",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "Mike M.",
                    image: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  },
                  text: "No",
                  date: new Date().toDateString(),
                },
                {
                  id: 2,
                  author: {
                    id: 34,
                    name: "Esim Inch",
                    image: "https://images.ctfassets.net/cnu0m8re1exe/621LK0hTGKrRBzXdnqiuuE/e82b6415d8dec51658f2acd6ea6b70b7/viking.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
                  },
                  text: "Get out then",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 2,
          name: "making",
          comments: [
            
               
          ],
        },
      ],
    },
    {
      id: 2,
      taskState: "In Progress",
      tasks: [
        { 
          id: 1,
          name: "test",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "Esim Esiminchyan",
                image: "...",
              },
              text: "comment text",
              date: new Date().toDateString(),
              replies: [
                
              ],
            },
          ],
        },
        {
          id: 2,
          name: "using",
          comments: [
            
               
          ],
        },
      ],
    },
   
  ];

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
            <Route path="/tasks" element={<TasksPage tasks={tasks} handleCommentShow={handleCommentShow} comments={comments} isClicked={isClicked}/>  } />
            <Route path="/boards" element={<BoardsPage />} />
          </Routes>

        </Suspense>
      </div>
    </div>
  );
};

export default App;
