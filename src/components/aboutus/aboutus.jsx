import React from "react";
import "./aboutus.css"; // Import your styles
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import random from "../../assets/collegeImages/staffroom1.jpg";
// import random2 from "../../assets/collegeImages/workshop2.jpg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutUsContainer">
        <header className="aboutHeader">
          <h1>About TechLaw College</h1>
          <p>Empowering the next generation in Technology and Law.</p>
        </header>
        <div
          className="image"
          style={{
            background: `url(${random}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <h1>Why Tec Law College?</h1>
        </div>
        <section className="missionSection">
          <h2>Our Mission</h2>
          <p>
            At TechLaw College, we aim to bridge the gap between technology and
            law by offering innovative, interdisciplinary education that
            prepares students for the challenges of tomorrow. Our programs are
            designed to create leaders who are both tech-savvy and legally
            informed.
          </p>
        </section>
        <hr />
        <section className="visionSection">
          <h2>Our Vision</h2>
          <p>
            To be a center of academic excellence where technology meets justice
            — empowering students to shape the future with integrity,
            creativity, and skill.
          </p>
        </section>
        <hr />
        <section className="valuesSection">
          <h2>Core Values</h2>
          <ul>
            <li>Integrity and Ethics</li>
            <li>Innovation in Education</li>
            <li>Diversity and Inclusion</li>
            <li>Community Engagement</li>
            <li>Lifelong Learning</li>
          </ul>
        </section>
        <hr />
        <section className="contactSection">
          <h2>Contact Us</h2>
          <p>
            📍 Location: Kathmandu, Nepal <br />
            📧 Email: info@techlawcollege.edu.np <br />
            ☎️ Phone: +977-1-1234567
          </p>
        </section>
        <hr />
      </div>
      <Footer />
    </>
  );
}
