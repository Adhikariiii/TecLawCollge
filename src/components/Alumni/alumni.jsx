import React from "react";
import classroom from "../../data/classroom";
import office from "../../data/office";
import library from "../../data/library";
import Footer from "../footer/footer";

import Navbar from "../navbar/navbar";

import "./alumni.css";

export default function Alumni() {
  return (
    <>
      <Navbar />
      <div className="galleryContainer">
        <h1 className="galleryTitle">Welcome to Our Gallery</h1>

        <section className="gallerySection">
          <h2>Classroom</h2>
          <div className="galleryGrid">
            {classroom.map((item) => (
              <div className="galleryItem" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallerySection">
          <h2>Office</h2>
          <div className="galleryGrid">
            {office.map((item) => (
              <div className="galleryItem" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="gallerySection">
          <h2>Library</h2>
          <div className="galleryGrid">
            {library.map((item) => (
              <div className="galleryItem" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
