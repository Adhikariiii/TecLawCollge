import React from "react";
import "./location.css"; // Import corresponding CSS
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Lottie from "lottie-react";
import location from "./campus.json";
import worldMap from "../../assets/collegeImages/WorldMapp.svg";

export default function Location() {
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(${worldMap})`,
        backgroundRepeat: "no-repeat",
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="locationContainer">
        <header className="locationHeader">
          <h1>Our Location</h1>
          <p>Come visit TechLaw College — where technology meets justice.</p>
        </header>

        <section className="addressSection">
          <div>
            <h2>Campus Address</h2>
            <p>
              📍 TechLaw College <br />
              Maitidevi Road, Kathmandu, Nepal <br />
              ✉️ info@techlawcollege.edu.np <br />
              ☎️ +977-1-1234567
            </p>
          </div>
          <div className="animationSection">
            <Lottie
              animationData={location}
              loop={true}
              className="animation"
            />
          </div>
        </section>

        <section className="mapSection">
          <h2>Find Us on the Map</h2>
          <div className="mapContainer">
            <iframe
              title="TechLaw College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.254084890657!2d85.32842151503068!3d27.707932582794827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d95e96909%3A0xf832c6718d0d37e4!2sMaitidevi%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1719838574762!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
