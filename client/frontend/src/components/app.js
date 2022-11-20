import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Form from './forms';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login';
import Home from '../pages/home';
import Layout from '../pages/layout';
import Questions from '../pages/questionnaire'



function App() {
  
  return (
    <>
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path = "questions" element = {<Questions />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    </div></>
  )
}

export default App;