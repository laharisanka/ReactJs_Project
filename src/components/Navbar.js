// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
