import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="footerBrand">
          <img src={""} alt="Tech Law College" className="footerLogo" />
          <p>
            Tech Law College bridges the gap between law and technology,
            nurturing future-ready professionals with innovation and integrity.
          </p>
        </div>

        <div className="footerLinks">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/alumni">Alumni</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footerContact">
          <h4>Contact Us</h4>
          <p>Mid-Baneshwor, Kathmandu</p>
          <p>Email: info@techlawcollege.edu.np</p>
          <p>Phone: +977-1-1234567</p>
          <div className="footerSocial">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>
          &copy; {new Date().getFullYear()} Tech Law College. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
