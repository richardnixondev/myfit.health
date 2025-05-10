import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./assets/pages/Home";
import { AgeForm } from "./assets/pages/AgeForm";
import { AgeGroup1 } from "./assets/pages/AgeGroup1";


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <AgeForm />
      {/* <AgeGroup1 /> */}
      {/* <Router path="/" element={<Home />} />
      <Router path="/1" element={<AgeForm ageGroup="18-29" />} />
      <Router path="/2" element={<AgeForm ageGroup="30-39" />} />
      <Router path="/3" element={<AgeForm ageGroup="40-49" />} />
      <Router path="/4" element={<AgeForm ageGroup="50+" />} /> */}
    </Router>
  );
}

export default App;
