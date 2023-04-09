// import React, { Component } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Register from "./components/Register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
