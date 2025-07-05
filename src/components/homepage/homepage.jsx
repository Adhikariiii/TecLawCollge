import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import ImageSlider from "../imageSlider.jsx/imageslider";
//images
import BCA from "../../assets/collegeImages/BCA.jpg";
import BScCsit from "../../assets/collegeImages/bsccsit.png";
import BALLB from "../../assets/collegeImages/BALLB.jpg";
import principalImage from "../../assets/collegeImages/principalProfile.webp";

import { Link } from "react-router";
// MUI
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";

//style
import "./homepage.css";

//animation
import Lottie from "lottie-react";

import animation from "./animation.json";

export default function HomePage({ detail }) {
  return (
    <>
      <Navbar />
      <ImageSlider slides={detail} />

      <div className="picture">
        <Lottie animationData={animation} />

        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", textShadow: "  0.01px 0.01px black" }}
        >
          Our Programs
        </Typography>
      </div>
      <div className="ourProgramsContinaer">
        <div className="ourPrograms">
          <div className="programs">
            <Link to={"/courses/BCA"}>
              <Card className="programCard" elevation={4}>
                <img src={BCA} alt="BCA Program" />
                <h3>BCA(Bachelor of Computer Application)</h3>
              </Card>
            </Link>
          </div>
          <div className="programs">
            <Link to={"/courses/BscCsit"}>
              <Card className="programCard">
                <img src={BScCsit} alt="BCA Program" />
                <h3>
                  BSc CSIT(Bachelor of Science in Computer Science and
                  Information Technology)
                </h3>
              </Card>
            </Link>
          </div>
          <div className="programs">
            <Link to={"/courses/BALLB"}>
              <Card className="programCard">
                <img src={BALLB} alt="BALLB Program" />
                <h3>BALLB(Bachelor of Arts Bachelor of Laws)</h3>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Container>
          <Typography
            variant="h2"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            "Message from Principal"
          </Typography>
          <Paper elevation={5} className="messageFromPrincipal">
            <div className="image">
              <img src={principalImage} alt="" />
            </div>
            <div className="message">
              <Typography variant="h6" prop color="textSecondary">
                The standard of legal education in our country is rudimentary.
                For the development of educational quality, I strongly believe
                on materializing thoughts with the intense determination of
                identifying social facts to bring them into practical
                reality.With the motive of producing legal professionals within
                the country in international standard, NaLC has not compromised
                in terms of physical infrastructure or human resources. Every
                year the flow of mass students to abroad to achieve the degree
                of law is multiplying. Therefore, our institution is dedicated
                in maintaining the international standard of legal education
                incorporating full phase digital facilities including online
                assignment, on line library services, power point based class
                discussion and periodic update of the legal development in the
                country.... I believe NaLC will be the best option for them to
                pursue standard legal education in the country. The teaching
                faculty members including professors, associate professors,
                assisting professors and adjunct faculty members as well
                administrative members are self-motivated, cultured and
                professional in their respective jobs.{" "}
              </Typography>
            </div>
          </Paper>
        </Container>
      </div>

      <Footer />
    </>
  );
}
