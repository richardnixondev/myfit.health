import { BrowserRouter as Router } from "react-router-dom";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./assets/pages/Home";
import { AgeGroup1 } from "./assets/pages/AgeGroup1";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      {/* <AgeGroup1 /> */}
    </Router>
  );
}

export default App;
