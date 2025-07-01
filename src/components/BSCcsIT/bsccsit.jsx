import Navbar from "../navbar/navbar";
import "./bsccsit.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";
import computerLab3 from "../../assets/collegeImages/computerlab3.jpg";
import Footer from "../footer/footer";

import { useState } from "react";

export default function BscCsit() {
  const [click, setClick] = useState(false);

  const semesters = {
    "FIRST SEMESTER": [
      "Introduction to Information Technology",
      "C Programming",
      "Digital Logic",
      "Mathematics I",
      "Physics",
    ],
    "SECOND SEMESTER": [
      "MICROPROCESSOR ",
      "Discrete Structure",
      "Object-Oriented Programming",
      "MATHEMATICS II",
      "DISCRETE MATHEMATICS",
      "Statistics I",
    ],
    "THIRD SEMESTER": [
      "DATA STRUCTURE AND ALGORITHM",
      "NUMERICAL METHODS",
      "Computer Architecture ",
      "Statistics II",
    ],
    "FOURTH SEMESTER": [
      "Theory of Computation",
      "Computer Networks",
      "Operating Systems ",
      "DATABASE MANAGEMENT SYSTEM",
      "Artificial Intelligence",
    ],
    "FIFTH SEMESTER": [
      "Design and Analysis of Algorithms",
      "System Analysis and Design",
      "Cryptography",
      "Simulation and Modeling",
      "Web Technology",
      "Elective I",
    ],
    "SIXTH SEMESTER": [
      "Multimedia Computing",
      "Software Engineering",
      "Compiler Design and Constructoin",
      "E-Governance ",
      "Net Centric Computing ",
      "Elective II",
    ],
    "SEVENTH SEMESTER": [
      "Software Engineering",
      "Compiler Design and Constructoin",
      "E-Governance ",
      "Net Centric Computing ",
      "Elective II",
    ],
    "EIGHT SEMESTER": [
      "Advance Java Programming ",
      "Data Warehouse and Data Mining",
      "Principles of Mangement",
      "Project Work",
      "Elective III",
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
            <h1>
              BSC CSIT (Bachelor of Science in Computer Science and Information
              Technology.)
            </h1>
            <p>
              It's a four-year undergraduate program offered by Tribhuvan
              University (TU) in Nepal. The program focuses on providing
              students with both theoretical and practical knowledge in computer
              science and information technology, enabling them to address
              real-world problems in the IT industry.
            </p>
          </div>
        </div>
      </div>
      <div className="courseDescription">
        <h2>What does a BSC CSIT program cover?</h2>

        <div
          className="courseCovers"
          style={{ background: `url(${computerLab3})` }}
        >
          <ul>
            <li>
              <h3>Software development</h3>
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
              <h3>Network administration</h3>
            </li>
            <p>Understanding computer networks and how systems are managed.</p>
          </ul>
        </div>
      </div>
      <div className="courseDuration">
        <h2>Course Duration</h2>
        <p>
          BSC CSIT is a 4 years course which are divided into eight semesters
        </p>
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
