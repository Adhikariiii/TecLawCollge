import Navbar from "../navbar/navbar";
import "./bca.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";
import computerLab3 from "../../assets/collegeImages/computerlab3.jpg";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import video from "../../assets/videos/bca.mp4";
import Container from "@mui/material/Container";

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
        {/* <div className="courseImage"> */}
        <video src={video} loop muted autoPlay />

        <Typography variant="h1" className="courseHeading" align="start">
          <h1>BCA (Bachelor of Computer Application)</h1>
          <Typography variant="h6" align="center">
            BCA, which stands for Bachelor of Computer Applications, is a three
            or four-year undergraduate degree program focused on computer
            applications and software development. It equips students with the
            knowledge and skills needed for careers in the IT industry,
            including programming, database management, and web development.
          </Typography>
        </Typography>
        {/* </div> */}
      </div>
      <Typography variant="h2" color="textSecondary" align="center" mt={9}>
        <hr />
        What does a BCA program cover?
      </Typography>

      <div className="descriptionOfcourse">
        <div className="imageOfCourse">
          <img src={computerLab2} alt="labImgae" />
        </div>
        <div className="descOfCourse">
          <Paper elevation={4} className="courseCovers">
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
              <p>
                Understanding computer networks and how systems are managed.
              </p>
            </ul>
          </Paper>
        </div>
      </div>

      <div className="courseDuration">
        <h2>Course Duration</h2>
        <p>BCA is a 4 years course which are divided into eight semesters</p>
        <div className="buttonContainer">
          {Object.keys(semesters).map((semester, index) => {
            return (
              <button
                variant="contained"
                color="success"
                key={index}
                className="semesterButton"
                onClick={() => handleClick(semester)}
              >
                {semester}
              </button>
            );
          })}
          {click && (
            <Paper elevation={4} className="semesterContent">
              <ul>
                <h2>{click}</h2>
                {semesters[click].map((subject, i) => (
                  <li key={i}>
                    <a href="#">{subject}</a>
                  </li>
                ))}
              </ul>
            </Paper>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
