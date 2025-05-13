import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./assets/pages/Home";

function App() {
  return (
    <Router>
    <Navbar />
      <Home />
      
    </Router>
  );
}

export default App;
