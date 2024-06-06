import React from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/navbar/Home";
import Login from "./components/navbar/Login";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
