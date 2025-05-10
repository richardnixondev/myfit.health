import { BrowserRouter as Router } from "react-router-dom";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./assets/pages/Home";
import { AgeGroup1 } from "./assets/pages/AgeGroup1";
import { AgeForm } from "./assets/pages/AgeForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <AgeForm/>
      {/* <AgeGroup1 /> */}
      {/* <Route path="/1" element={<AgeForm ageGroup="18-29" />} />
      <Route path="/2" element={<AgeForm ageGroup="30-39" />} />
      <Route path="/3" element={<AgeForm ageGroup="40-49" />} />
      <Route path="/4" element={<AgeForm ageGroup="50+" />} /> */}
    </Router>
  );
}

export default App;
