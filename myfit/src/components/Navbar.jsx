import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      <ul className="navbar">
        <li className="navbar__item navbar__item--name">
        <h1 className="logo">My Fit</h1> 
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="dropdown__toggle">📋 ▾</span>
          {isDropdownOpen && (
            <ul className="dropdown__menu">
              <li>
                <Link to="/1">🏠Home</Link>
              </li>
              <li>
                <Link to="/2">Dash Board</Link>
              </li>
              <li>
                <Link to="/3">ℹ️About</Link>
              </li>
              <li>
                <Link to="/4">Help</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
