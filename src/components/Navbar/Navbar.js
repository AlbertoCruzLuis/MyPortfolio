import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-item">
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
