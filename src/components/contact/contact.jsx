import React from "react";
import "./contact.css";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Lottie from "lottie-react";
import contact from "./contact.json";
import waves from "../../assets/collegeImages/wavy.png";
export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contactContainer">
        <div
          className="background"
          style={{
            backgroundImage: `url(${waves})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <header className="contactHeader">
            <h1 className="gradientHeading">Contact Us</h1>
            <p>
              We’d love to hear from you! Reach out with any questions or
              inquiries.
            </p>
          </header>
          <section className="contactDetails">
            <div className="contactInfo">
              <h2 style={{ color: "black" }}>Get in Touch</h2>
              <p>
                <strong>📍 Address:</strong> Maitidevi Road, Kathmandu, Nepal
              </p>
              <p>
                <strong>📧 Email:</strong> info@techlawcollege.edu.np
              </p>
              <p>
                <strong>☎️ Phone:</strong> +977-1-1234567
              </p>
              <p>
                <strong>🕐 Hours:</strong> Sunday - Friday: 9:00 AM – 5:00 PM
              </p>
              <div className="animationContainer">
                <Lottie
                  animationData={contact}
                  loop={true}
                  className="animation"
                />
              </div>
            </div>

            <form className="contactForm">
              <h2>Send a Message</h2>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
