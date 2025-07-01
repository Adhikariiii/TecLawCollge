import Navbar from "../navbar/navbar";
import "./bca.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";
import computerLab3 from "../../assets/collegeImages/computerlab3.jpg";

import { useState } from "react";
import Footer from "../footer/footer";

export default function BCA() {
  const [click, setClick] = useState(false);

  const semesters = {
    "FIRST SEMESTER": [
      "DIGITAL LOGIC",
      "MATHEMATICS I",
      "SOCIETY AND TECHNOLOGY",
      "ENGLISH I",
      "COMPUTER FUNDAMENTALS AND APPLICATIONS",
    ],
    "SECOND SEMESTER": [
      "MICROPROCESSOR AND COMPUTER ARCHITECTURE",
      "CPROGRAMMING",
      "ENGLISH II",
      "MATHEMATICS II",
      "DISCRETE MATHEMATICS",
      "FINANCIAL ACCOUNTING",
    ],
    "THIRD SEMESTER": [
      "DATA STRUCTURE AND ALGORITHM",
      "SYSTEM ANALYSIS AND DESIGN",
      "OOP IN JAVA",
      "WEB TECHNONLGY",
    ],
    "FOURTH SEMESTER": [
      "OPERATING SYSTEM",
      "NUMERICAL METHODS",
      "SOFTWARE ENGINEERING",
      "SCRIPITING LANGUAGE",
      "DATABASE MANAGEMENT SYSTEM",
      "PROJECT I",
    ],
    "FIFTH SEMESTER": [
      "MIS AND E-BUSINESS",
      "INTRODUCTION TO MANAGEMENT",
      "COMPUTER GRAPHICS AND ANIMATION",
      "DOTNET TECHNONOLOGY",
      "COMPUTER NETWORKING",
    ],
    "SIXTH SEMESTER": [
      "MOBILE PROGRAMMING",
      "DISTRIBUTED SYSTEM",
      " NETWORKING PROGRAMMING",
      "ADVANCE JAVA PROGRAMMING",
      "PROJECT II",
    ],
    "SEVENTH SEMESTER": [
      "CYBER LAW AND COMPUTER ETHICS",
      "INTERNSHIP",
      "ELCETIVE I",
      "ELECTIVE II",
      "CLOUD COMPUTING",
    ],
    "EIGHT SEMESTER": [
      "IMAGE PROCESSING ",
      "DATABASE ADMINSTRATOR",
      "ADVANCE DOTNET TECHNOLGY",
      "ARTIFICIAL INTELLIGENCE",
      "PROJECT III",
    ],
  };

  const handleClick = (semester) => {
    setClick((prevClick) => (prevClick === semester ? false : semester));
  };
  return (
    <>
      <Navbar />
      <div className="courseContainer">
        <div
          className="courseImage"
          style={{ background: `url(${computerLab2})` }}
        >
          <div className="courseHeading">
            <h1>BCA (Bachelor of Computer Application)</h1>
            <p
              className="courseHeadingParagrah"
              style={{
                color: "white",
                fontSize: "1.4rem",
                filter: "brightness(2)",
              }}
            >
              BCA, which stands for Bachelor of Computer Applications, is a
              three or four-year undergraduate degree program focused on
              computer applications and software development. It equips students
              with the knowledge and skills needed for careers in the IT
              industry, including programming, database management, and web
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="courseDescription">
        <h2>What does a BCA program cover?</h2>

        <div
          className="courseCovers"
          style={{ background: `url(${computerLab3})` }}
        >
          <ul>
            <li>
              <h3>Core computer science concepts</h3>
            </li>
            <p>
              Programming languages (like C, C++, Java), database management,
              operating systems, and software engineering
            </p>
            <li>
              <h3>Web development</h3>
            </li>
            <p>HTML, CSS, JavaScript, and related technologies.</p>
            <li>
              <h3>Networking and system administration:</h3>
            </li>
            <p>Understanding computer networks and how systems are managed.</p>
          </ul>
        </div>
      </div>
      <div className="courseDuration">
        <h2>Course Duration</h2>
        <p>BCA is a 4 years course which are divided into eight semesters</p>
        <div className="buttonContainer">
          {Object.keys(semesters).map((semester, index) => {
            return (
              <button
                key={index}
                className="semesterButton"
                onClick={() => handleClick(semester)}
              >
                {semester}
              </button>
            );
          })}
          {click && (
            <div className="semesterContent">
              <ul>
                <h2>{click}</h2>
                {semesters[click].map((subject, i) => (
                  <li key={i}>
                    <a href="#">{subject}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
