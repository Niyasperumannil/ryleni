import React, { useState } from "react";
import "./AchievementsSection.css";

const slides = [
  {
    title: "FlowTech",
    description:
      "AI-powered investment platform for retail investors..",
    image: "https://ryleni.com/assets/tech-fintech-CIFDcOl-.jpg"
  },
  {
    title: "MedConnect",
    description:
      "Telemedicine infrastructure for rural providers.",
    image: "https://ryleni.com/assets/tech-cleantech-BPObzPQQ.jpg"
  },
  {
    title: "LogiChain",
    description:
      "Supply chain optimization using AI.",
    image: "https://ryleni.com/assets/tech-logistics-LSBv6t2M.jpg"
  }
];

const AchievementsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="achievements-section">
      <div className="achievements-container">

        <h2 className="main-heading">
          SELECTED <br />VENTURES
        </h2>

        <span className="awards-label">Portfolio</span>

        <div className="achievement-content">

          <div className="achievement-left">
            <h3>{slides[current].title}</h3>
            <p>{slides[current].description}</p>
          </div>

          <div className="achievement-right">
            <img src={slides[current].image} alt="Achievement" />
          </div>

        </div>

        <div className="divider"></div>

        <div className="slider-controls">
          <button onClick={prevSlide} className="nav-btn">←</button>
          <button onClick={nextSlide} className="nav-btn active">→</button>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;
