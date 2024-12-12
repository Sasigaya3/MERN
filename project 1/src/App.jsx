import React from 'react'
import Login from "./pages/login_signup/Login";
import {BrowserRouter, Routes, Route, Router}from "react-router-dom";
import Signup from "./pages/login_signup/Signup";
import Homepage from "./pages/home/Homepage";
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/home" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
    </div>
    );
};

export default App;

