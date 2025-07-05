import BCA from "../../assets/collegeImages/BCA.jpg";
import BScCsit from "../../assets/collegeImages/bsccsit.png";
import BALLB from "../../assets/collegeImages/ballb.jpg";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import { Link } from "react-router";

export default function Courses() {
  return (
    <>
      <Navbar />
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
                BSc CSIT(Bachelor of Science in Computer Science and Information
                Technology)
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
      <Footer />
    </>
  );
}
