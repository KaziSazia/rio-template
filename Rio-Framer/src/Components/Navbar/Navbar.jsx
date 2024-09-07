import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>

      <a className="cta" href="#">
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;
