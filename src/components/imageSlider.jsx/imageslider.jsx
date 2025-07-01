import React, { useRef, useState, useEffect } from "react";
import style from "../imageSlider.jsx/imageslider.module.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ slides }) {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (slider && slider.children[index]) {
      const slideWidth = slider.children[index].offsetWidth;
      slider.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="sliderContainer">
      <BsArrowLeftCircleFill className={style.arrow} onClick={handlePrev} />

      <div className={style.sliderWrapper} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div
            className={style.imageSlider}
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={style.textContainer}>
              <h1 className={style.heading}>Tec Law College</h1>
              <p className={style.paragraph}>THEME OF THE COLLEGE</p>
              <h3 className={style.thirdHeading}>
                Education is not just about going to school and getting a
                degree. It's about widening your knowledge.
              </h3>
              <div className={style.buttonContainer}>
                <button className={style.button}>
                  <span>GET STARTED</span>
                </button>
                <button className={style.button}>
                  <span>LEARN MORE</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BsArrowRightCircleFill className={style.arrow} onClick={handleNext} />
    </div>
  );
}
