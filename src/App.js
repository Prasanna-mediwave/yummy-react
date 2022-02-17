import React from "react";
import NavBar from "./compounts/Navbar";
import "../src/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./compounts/Home";
import AddRecipes from "./compounts/AddRecipes";
import Footer from "./compounts/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddRecipes" element={<AddRecipes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
