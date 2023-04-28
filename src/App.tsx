import React from "react";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
