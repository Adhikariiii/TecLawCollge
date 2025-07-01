import Navbar from "../navbar/navbar";
import "./ballab.css";
import ballb1 from "../../assets/collegeImages/classroom4.jpg";
import ballab2 from "../../assets/collegeImages/classroom5.jpg";
import Footer from "../footer/footer";

import { useState } from "react";

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
    <>
      <Navbar />
      <div className="courseContainer">
        <div className="courseImage" style={{ background: `url(${ballb1})` }}>
          <div className="courseHeading">
            <h1>The Bachelor of Arts and Bachelor of Laws (BALLB)</h1>
            <p>
              The Bachelor of Arts and Bachelor of Laws (BALLB) program at
              Tribhuvan University (TU) covers a wide range of subjects,
              integrating legal studies with social sciences and humanities. It
              aims to equip students with knowledge in areas like constitutional
              law, criminal law, contract law, and human rights, alongside
              skills in legal research, analysis, and communication. The program
              also explores the legal environment in various sectors such as
              trade, finance, and social security
            </p>
          </div>
        </div>
      </div>
      <div className="courseDescription">
        <h2>What does a BALLB program cover?</h2>

        <div className="courseCovers" style={{ background: `url(${ballab2})` }}>
          <ul>
            <li>
              <h3>Core Legal Subjects:</h3>
            </li>
            <p>
              Constitutional Law, Criminal Law, Contract Law, Jurisprudence,
              Legal Theory, Procedural Law, and Administrative Law.
            </p>
            <li>
              <h3>Social Sciences and Humanities:</h3>
            </li>
            <p>
              Political Science, History, Sociology, Economics, and English (as
              a medium of instruction).{" "}
            </p>
            <li>
              <h3>Legal Systems:</h3>
            </li>
            <p>
              Nepalese Legal System, Comparative Legal Systems, and
              International Law.{" "}
            </p>
            <li>
              <h3>Practical Skills:</h3>
            </li>
            <p>
              Legal Research, Legal Writing, Moot Court, and Client Counseling.
            </p>
            <li>
              <h3>Interdisciplinary Areas: </h3>
            </li>
            <p>Law and Society, Law and Economics, Law and Technology. </p>
          </ul>
        </div>
      </div>
      <div className="courseDuration">
        <h2>Course Duration</h2>
        <p>
          B.A.LL.B. Programme. Those students who have completed +2 or
          equivalent can apply for this programme. This is a five year Course
          with 10 semesters.
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
        </div>
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
      <Footer />
    </>
  );
}
