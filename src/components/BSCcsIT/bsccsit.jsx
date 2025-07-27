import Navbar from "../navbar/navbar";
import "../BCA/bca.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";

import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Lottie from "lottie-react";
import coding from "../BCA/coding.json";
import background from "../../assets/collegeImages/background.jpg";

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
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="courseContainer">
        <Typography
          variant="h2"
          sx={{
            color: "#f6f6eecd",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3.5rem" },
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          BSc CSIT (Bachelor of Science in Computer Science and Information
          Technology)
        </Typography>
      </div>

      <div className="mainContainer">
        <div className="descContainer">
          <div className="animation">
            <Lottie animationData={coding} loop={true} className="animated" />
          </div>
          <div className="shortDescirption">
            <Typography
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
              BSc CSIT stands for Bachelor of Science in Computer Science and
              Information Technology. It is a four-year undergraduate program
              affiliated with Tribhuvan University in Nepal. The program focuses
              on providing students with a strong foundation in both computer
              science principles and practical applications of information
              technology.
            </Typography>
          </div>
        </div>

        <Typography variant="h2" color="textSecondary" align="center" mt={13}>
          <hr />
          What does a BSc CSIT program cover?
        </Typography>

        <div className="descriptionOfcourse">
          <div className="imageOfCourse">
            <img src={computerLab2} alt="labImgae" />
          </div>
          <div className="descOfCourse">
            <Paper elevation={4} className="courseCovers" color="textPrimary">
              <ul>
                <li>
                  <h3>Computer Science Fundamentals:</h3>
                </li>
                <p>
                  This includes core areas like programming languages,
                  algorithms, data structures, and theoretical computer science.
                </p>
                <li>
                  <h3>Information Technology:</h3>
                </li>
                <p>
                  This covers areas like database management, networking,
                  software development, and systems analysis.
                </p>
                <li>
                  <h3>Mathematics and Physics:</h3>
                </li>
                <p>
                  These are foundational subjects that provide the necessary
                  background for understanding computer science and IT
                  principles.
                </p>
              </ul>
            </Paper>
          </div>
        </div>

        <div className="courseDuration">
          <h2>Course Duration</h2>
          <p>
            BscCsIT is a 4 years course which are divided into eight semesters
          </p>
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
            <div className="sem">
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
        </div>
      </div>
    </div>
  );
}
