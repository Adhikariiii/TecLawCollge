import Navbar from "../navbar/navbar";
import "./bca.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import Footer from "../footer/footer";

import background from "../../assets/collegeImages/background.jpg";
import Lottie from "lottie-react";
import computerLottie from "./computer.json";

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
    <div>
      <Navbar />
      <div
        className="mainContainer"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#ffc107",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "5rem" },
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          BCA (Bachelor of Computer Application)
        </Typography>
        <div
          className="mainContainer"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="descContainer">
            <div className="animation">
              <img
                src={computerLab2}
                alt="labImage"
                style={{ height: "300px", width: "600px", marginTop: "2rem" }}
              />
            </div>

            <div className="shortDescirption">
              <Typography
                align="center"
                variant="h5"
                color="textSecondary"
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.8,
                  maxWidth: "800px",
                  marginInline: "auto",
                  marginTop: "5rem",
                }}
              >
                BCA, which stands for Bachelor of Computer Applications, is a
                three or four-year undergraduate degree program focused on
                computer applications and software development. It equips
                students with the knowledge and skills needed for careers in the
                IT industry, including programming, database management, and web
                development.
              </Typography>
            </div>
          </div>

          <Typography variant="h2" color="textSecondary" align="center" mt={13}>
            <hr />
            What does a BCA program cover?
          </Typography>

          <div className="descriptionOfcourse">
            <div className="descOfCourse">
              <Paper elevation={4} className="courseCovers">
                <ul>
                  <li>
                    <h3>Core computer science concepts</h3>
                    <p>
                      Programming languages (like C, C++, Java), database
                      management, operating systems, and software engineering
                    </p>
                  </li>
                  <li>
                    <h3>Web development</h3>
                    <p>HTML, CSS, JavaScript, and related technologies.</p>
                  </li>
                  <li>
                    <h3>Networking and system administration</h3>
                    <p>
                      Understanding computer networks and how systems are
                      managed.
                    </p>
                  </li>
                </ul>
              </Paper>
            </div>

            <div className="imageOfCourse">
              <Lottie animationData={computerLottie} loop={true} />
            </div>
          </div>

          <div className="courseDurationn">
            <Typography align="center" variant="h3" color="textSecondary">
              Course Duration
            </Typography>
            <Typography align="center" variant="h5" color="textSecondary">
              BCA is a 4-year course divided into eight semesters
            </Typography>

            <div className="buttonContainer">
              {Object.keys(semesters).map((semester, index) => (
                <button
                  variant="contained"
                  color="success"
                  key={index}
                  className="semesterButton"
                  onClick={() => handleClick(semester)}
                >
                  {semester}
                </button>
              ))}
            </div>

            {click && (
              <div className="semesterContent">
                <Paper elevation={4} className="semesterDetails">
                  <ul>
                    <h2>{click}</h2>
                    {semesters[click].map((subject, i) => (
                      <li key={i}>
                        <a href="#">{subject}</a>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </div>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
