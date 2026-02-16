import React, { useEffect, useState } from "react";
import "./JainHeroSlider.css";

const taglines = [
  "BUILD BOLD\nSCALE SMART",
  "FUND IDEAS\nDRIVE IMPACT",
  "INNOVATE FAST\nGROW STRONG",
  "VISION TO VALUE\nSTARTUP TO SUCCESS"
];

const JainHeroSlider = () => {

  const [current, setCurrent] = useState(0);
  const totalSlides = taglines.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="jain-hero">

      <video
        className="hero-video"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          {taglines[current].split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-slider">
        <div className="slider-count">
          {String(current + 1).padStart(2, "0")}/04
        </div>

        <div className="slider-dots">
          {taglines.map((_, index) => (
            <span
              key={index}
              className={current === index ? "active" : ""}
            ></span>
          ))}
          <span className="play"></span>
        </div>
      </div>

      <div className="hero-bottom">
        <div>Explore Services</div>
        <div>Apply for Funding</div>
        <div>Brochure</div>
        <div>Contact Us</div>
      </div>

    </section>
  );
};

export default JainHeroSlider;
