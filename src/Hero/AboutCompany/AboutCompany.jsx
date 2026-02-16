import React, { useEffect, useRef, useState } from "react";
import "./AboutCompany.css";

const WhoWeAreSplit = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`who-section ${visible ? "show" : ""}`}
    >
      <div className="who-container">

        {/* LEFT CONTENT */}
        <div className="who-left">

          <span className="who-label reveal reveal-1">
            WHO WE ARE
          </span>

          <h2 className="who-heading reveal reveal-2">
            ACCELERATING INNOVATION.
            <br />
            POWERING THE FUTURE
          </h2>

          <p className="who-description reveal reveal-3">
            Our venture studio ignites growth by combining strategic capital,
            operational expertise, and a global network to transform
            groundbreaking ideas into market-leading companies.
          </p>

          <ul className="who-points reveal reveal-4">
            <li>Proven Studio Model</li>
            <li>Access to Global Capital Networks</li>
            <li>Strategic Guidance & Operational Support</li>
          </ul>

        </div>

        {/* RIGHT CONTENT */}
        <div className="who-right reveal reveal-right">

          <div className="who-arch">
            <img
              src="https://ryleni.com/venture_studio_team_square.jpg"
              alt="Main Visual"
            />
          </div>

          <div className="who-small-wrapper">
            <div className="who-small">
              <img
                src="https://ryleni.com/assets/tech-analytics-DGqWTkqW.jpg"
                alt="Strategy"
              />
            </div>
            <div className="who-small">
              <img
                src="https://ryleni.com/assets/tech-fintech-CIFDcOl-.jpg"
                alt="Capital"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSplit;
