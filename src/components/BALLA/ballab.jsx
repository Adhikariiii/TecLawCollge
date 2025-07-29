import Navbar from "../navbar/navbar";
import "../BCA/bca.css";
import computerLab2 from "../../assets/collegeImages/computerlab2.jpg";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import Footer from "../footer/footer";

import background from "../../assets/collegeImages/background.jpg";
import ballb from "../../assets/collegeImages/classroom5.jpg";
import Lottie from "lottie-react";
import computerLottie from "./ballb.json";
import law from "./llb.json";

export default function BALLB() {
  const [click, setClick] = useState(false);

  const semesters = {
    "FIRST SEMESTER": [
      "Legal Method",
      "Legal Nepali-I",
      "Alternative English",
      "Legal English I",
      "Political Science: Theory and Thoughts",
      "History ",
      "Sociology and Anthropology",
      "Economics-I",
    ],
    "SECOND SEMESTER": [
      "Jurisprudence-I",
      "Constitutional Law-I",
      "Property Law",
      "Legal Nepali-II",
      "Alternative English (For foreigner in Lieu of Legal Nepali)",
      "Legal English II",
      "International Relations and Diplomacy",
      "Economics-II",
    ],
    "THIRD SEMESTER": [
      "Jurisprudence-II",
      "Evidence Law",
      "Criminal Law-I",
      "Public International Law-I",
      "Legal Research Methodology",
    ],
    "FOURTH SEMESTER": [
      "Criminal Law-II",
      "Public International Law-II",
      "Comparative Law",
      "Family Law",
      "Contract Law",
      "Procedural Law-I",
    ],
    "FIFTH SEMESTER": [
      "Contract Law-II",
      "Criminal and Penology",
      "Procedural Law-II",
      "Company Law and Governance",
      "Clinical Law-I: Alternative Dispute Resolution",
      "Juvenile Delinquency",
      "Election Law",
      "Cyber Law",
      "International Air and Space Law",
    ],
    "SIXTH SEMESTER": [
      "Corporate Law and Management",
      "Nepalese Legal System",
      "Intellectual Property Law",
      "International Institutions and Human Rights Law",
      "Interpretation of Law",
      "Law of Torts and Consumer Protection",
      "Insurance Law",
      "Socio-Economic Crime",
      "International Humanitarian Law",
    ],
    "SEVENTH SEMESTER": [
      "Gender and Inclusive Justice",
      "Law, Poverty and Development",
      "Environmental Law",
      "Seminar-I(Doctrinal)",
      "Labour Law",
      "Forensic Science",
      "Fiscal Law",
      "Natural Resources Law",
      "International Refugee Law",
    ],
    "EIGHTH SEMESTER": [
      "Professional Ethics and Lawyering Skills",
      "Moot Court-I(Civil Case)",
      "Private International Law",
      "Administrative Law",
      "Clinical Law-II (Conveyancing)",
      "International Rivers and Sea Law",
      "Forensic Medical",
      "Investment Law",
      "Media Law",
    ],
    "NINTH SEMESTER": [
      "Moot Court-II (Criminal Case)",
      "Law of Banking and Negotiable Instruments",
      "Legislative Drafting",
      "Taxation Law",
      "Seminal - II (Non-Doctrinal)",
      "Energy Law",
      "Victimology",
      "Population Law",
      "Competition Law",
    ],
    "TENTH SEMESTER": [
      "Clinical Law-III (Placement)",
      "Social Welfare and Social Work Law",
      "International Trade Law",
      "Dissertation",
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
            fontSize: { xs: "2rem", md: "3rem" },
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          BA LLB (Bachelor of Arts and Bachelor of Laws)
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
              <Lottie animationData={law} loop={true} />
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
                BSc CSIT stands for Bachelor of Science in Computer Science and
                Information Technology. It is a four-year undergraduate program
                affiliated with Tribhuvan University in Nepal. The program
                focuses on providing students with a strong foundation in both
                computer science principles and practical applications of
                information technology.
              </Typography>
            </div>
          </div>

          <Typography variant="h2" color="textSecondary" align="center" mt={13}>
            <hr />
            What does a BALLB program cover?
          </Typography>

          <div className="descriptionOfcourse">
            <div className="descOfCourse">
              <Paper elevation={4} className="courseCovers" color="textPrimary">
                <ul>
                  <li>
                    <h3>Integrated Degree:</h3>
                  </li>
                  <p>
                    It combines the study of arts subjects (like political
                    science, history, sociology, economics) with the study of
                    law.
                  </p>

                  <li>
                    <h3>Comprehensive Curriculum:</h3>
                  </li>
                  <p>
                    The program covers a wide range of legal subjects, including
                    constitutional law, criminal law, contract law, and more,
                    alongside arts and humanities.
                  </p>

                  <li>
                    <h3>Skill Development:</h3>
                  </li>
                  <p>
                    It aims to develop students' legal knowledge, analytical
                    skills, critical thinking, and communication abilities.
                  </p>
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
              BALLB is a 5-year course divided into eight semesters
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
