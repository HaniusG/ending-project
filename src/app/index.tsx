import "./styles/index.scss";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainPage = lazy(() => import('pages/MainPage'))



const App: React.FC = () => {
 

  return (
    <BrowserRouter>
        <Suspense fallback={"Loading"}>
        <Routes>
            <Route path='/main' element={<MainPage/>} />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
};

export default App;
