import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Components from "./components/Components";
import GitHubRepo from "./components/code";
import "./App.css";
import "animate.css";

import AboutUs from "./components/Aboutus";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/code" element={<GitHubRepo />} />
        <Route path="/code/:componentName" element={<GitHubRepo />} />
      </Routes>
    </div>
  );
}

export default App;
