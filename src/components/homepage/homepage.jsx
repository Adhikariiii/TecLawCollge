import { useState } from "react";
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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

//style
import "./homepage.css";

//animation
import Lottie from "lottie-react";

import animation from "./animation.json";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

//arrays
const whyChooseUsList = [
  {
    id: 1,
    heading: "Discipiline",
    details:
      " Discipline in college is the foundation for personal growth and academic excellence. It instills a sense of responsibility, time management, and focus—qualities essential for achieving long-term goals. A disciplined student maintains consistency in learning, respects rules and deadlines, and develops the perseverance needed to overcome challenges and succeed in both academic and professional life.",
    backgroundColor: "#067BC2",
  },
  {
    id: 2,
    heading: "Regularity",
    details:
      "  Regularity in college plays a vital role in shaping a student's academic journey and overall discipline. Attending classes consistently helps build a strong foundation of knowledge, ensures steady progress, and fosters a habit of commitment. Regular students stay more connected with their studies, participate actively, and are better prepared to achieve their goals with confidence and clarity.",
    backgroundColor: "#84BCDA",
  },
  {
    id: 3,
    heading: "Practical Approach",
    details:
      " A practical approach in college bridges the gap between theory and real-world application, helping students develop problem-solving skills and hands-on experience. It prepares them to face professional challenges confidently, enhances understanding through active learning, and makes education more relevant and engaging. This approach fosters creativity, critical thinking, and better retention of knowledge, ultimately producing graduates who are ready to contribute effectively in their careers.",
    backgroundColor: "#ECC30B",
  },
  {
    id: 2,
    heading: "Team Work",
    details:
      "  Teamwork in college teaches students how to collaborate, communicate, and respect diverse perspectives. Working together on projects builds leadership skills, encourages creative problem-solving, and helps distribute responsibilities effectively. It prepares students for the professional world where success often depends on strong cooperation and the ability to work well with others toward common goals.",
    backgroundColor: "#F37748",
  },
];

export default function HomePage({ detail }) {
  const [buttonClick, setButtonClick] = useState(null);

  const handleClick = (index) => {
    setButtonClick((prevClick) => (index === prevClick ? null : index));
  };

  return (
    <>
      <CssBaseline />
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
              <Typography variant="h6" color="textSecondary">
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
                country.... I believe will be the best option for them to pursue
                standard legal education in the country. The teaching faculty
                members including professors, associate professors, assisting
                professors and adjunct faculty members as well administrative
                members are self-motivated, cultured and professional in their
                respective jobs.{" "}
              </Typography>
            </div>
          </Paper>
        </Container>
      </div>
      <section className="chooseUs">
        <Typography
          variant="h2"
          color="textSecondary"
          align="center"
          mt={7}
          sx={{ fontWeight: "bold" }}
        >
          Why Choose Us?
        </Typography>
        <div className="grid">
          {whyChooseUsList.map((list, index) => {
            return (
              <Container
                className="detailsContainer"
                key={index}
                style={{ backgroundColor: `${list.backgroundColor}` }}
              >
                <Typography variant="h3">{list.id}</Typography>
                <Typography variant="h3" align="center">
                  {list.heading}
                  {buttonClick === index ? (
                    <RemoveCircleOutlineIcon
                      onClick={() => {
                        handleClick(index);
                      }}
                    />
                  ) : (
                    <AddCircleOutlineIcon
                      onClick={() => {
                        handleClick(index);
                      }}
                    />
                  )}
                  {buttonClick === index && (
                    <div>
                      <Typography variant="h5" color="textSecondary">
                        {list.details}
                      </Typography>
                    </div>
                  )}
                </Typography>
              </Container>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
