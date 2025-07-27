import BCA from "../../assets/collegeImages/BCA.jpg";
import BScCsit from "../../assets/collegeImages/bsccsit.png";
import BALLB from "../../assets/collegeImages/ballb.jpg";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import research from "../../assets/collegeImages/worldmap.svg";
import { Link } from "react-router";

//style
import "./courses.css";
import background from "../../assets/collegeImages/background.jpg";

//mui
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Courses() {
  return (
    <>
      {window.scrollTo(0, 0)}

      <div
        className="mainContainer"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="courseDisplay">
          <img src={research} alt="researching" />

          <div className="list">
            <Typography
              align="justify"
              variant="h4"
              color="textSecondary"
              mt={30}
              mr={5}
            >
              These are the list of the courses that we will be teaching
            </Typography>
          </div>
        </div>

        <div className="ourPrograms">
          <div className="programs">
            <Link to={"/courses/BCA"}>
              <div className="programCard">
                <img src={BCA} alt="BCA Program" />
                <h3>BCA(Bachelor of Computer Application)</h3>
              </div>
            </Link>
          </div>
          <div className="programs">
            <Link to={"/courses/BscCsit"}>
              <div className="programCard">
                <img src={BScCsit} alt="BCA Program" />
                <h3>
                  {" "}
                  BSc CSIT(Bachelor of Science in Computer Science and
                  Information Technology)
                </h3>
              </div>
            </Link>
          </div>
          <div className="programs">
            <Link to={"/courses/BALLB"}>
              <div className="programCard">
                <img src={BALLB} alt="BALLB Program" />
                <h3>BALLB(Bachelor of Arts Bachelor of Laws)</h3>
              </div>
            </Link>
          </div>
        </div>
        <Button
          variant="contained"
          align="center"
          color="success"
          sx={{
            height: "4rem",
            width: "8rem",
            fontSize: "1rem",
            marginLeft: "40%",
          }}
        >
          Apply Now
        </Button>
        <Footer />
      </div>
    </>
  );
}
