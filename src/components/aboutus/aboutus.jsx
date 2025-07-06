import React from "react";
import "./aboutus.css"; // Import your styles
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import random from "../../assets/collegeImages/staffroom1.jpg";
// import random2 from "../../assets/collegeImages/workshop2.jpg";
import Typography from "@mui/material/Typography";

import Lottie from "lottie-react";

//animation
import whyus from "./whyUs.json";
import mission from "./mission.json";
import values from "./values.json";
import vision from "./vision.json";
//style
import "./aboutus.css";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutUsContainer">
        <header className="aboutHeader">
          <h1>About TechLaw College</h1>
          <p>Empowering the next generation in Technology and Law.</p>
        </header>
        <div className="reasonOfChoosing">
          <div className="annimation">
            <Lottie animationData={whyus} className="animationIcon" />
          </div>
          <div className="heading">
            <Typography
              variant="h2"
              color="textSecondary"
              mt={19}
              sx={{ fontWeight: "bold" }}
            >
              Why This College?
            </Typography>
          </div>
        </div>

        <section className="missionSection">
          <h2>Our Mission</h2>
          <div className="missionContainer">
            <div>
              <Typography variant="h5" color="textSecondary" mt={10}>
                To provide quality education that blends technology with legal
                studies, fostering analytical thinking, ethical values, and
                leadership skills among students to meet the demands of the
                modern world and contribute to justice, innovation, and social
                progress.{" "}
              </Typography>
            </div>
            <div elevation={1} className="animation">
              <Lottie
                animationData={mission}
                loop={true}
                // className="lottieanimation"
              />
            </div>
          </div>
        </section>
        <hr />

        <section className="visionSection">
          <h2>Our Vision</h2>

          <div className="visionContainer">
            <div elevation={1} className="visionAnimation">
              <Lottie
                animationData={vision}
                loop={true}
                className="visionAnimationIcon"
              />
            </div>
            <div>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                mt={9}
                mr={9}
              >
                To be a pioneering institution that blends technological
                innovation with legal education, producing future-ready leaders
                equipped with the skills, ethics, and insight to shape the
                digital age with justice and responsibility.
              </Typography>
            </div>
          </div>
        </section>
        <hr />
        <section className="valuesSection">
          <h2>Core Values</h2>

          <div className="missionContainer">
            <div>
              <Typography variant="h3" color="textSecondary" mt={10}>
                <ul>
                  <Typography variant="h5" gutterbottom>
                    Integrity and Ethics
                  </Typography>
                  <Typography variant="h5" gutterbottom>
                    Innovation in Education
                  </Typography>
                  <Typography variant="h5" gutterbottom>
                    Diversity and Inclusion
                  </Typography>
                  <Typography variant="h5" gutterbottom>
                    Community Engagement
                  </Typography>
                  <Typography variant="h5" gutterbottom>
                    Lifelong Learning
                  </Typography>
                </ul>
              </Typography>
            </div>

            <div elevation={1} className="animation">
              <Lottie
                animationData={values}
                loop={true}
                className="annimation"
              />
            </div>
          </div>
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
