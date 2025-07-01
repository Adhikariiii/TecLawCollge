import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "var(--accent-color)" }}
        >
          Tec Law College
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to={"/aboutus"}>About Us</Link>
        <a href="#courses">Courses</a>
        <Link to={"/location"}>Location</Link>
        <Link to={"/Alumni"}>Alumni</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}
