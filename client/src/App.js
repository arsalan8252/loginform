import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/userRegistration/Register";
import Login from "./components/userRegistration/Login";
import Home from "./components/userRegistration/Home";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <>
    {/* <Portfolio/> */}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
