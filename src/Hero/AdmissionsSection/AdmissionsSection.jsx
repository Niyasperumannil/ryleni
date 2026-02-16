import React from "react";
import "./AdmissionsSection.css";

const AdmissionsSection = () => {
  return (
    <section className="admissions-section">
      <div className="admissions-container">

        {/* HERO SPLIT */}
        <div className="admissions-hero">

          {/* LEFT */}
          <div className="hero-left">
            <h2 className="admissions-title">
              END-TO-END VENTURE SUPPORT
            </h2>

            <p className="admissions-desc">
              From ideation to exit, we provide comprehensive support at every stage 
              of your entrepreneurial journey.
            </p>

            <button className="admissions-btn">
              Get Started ↗
            </button>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <h3 className="entrance-title">
              Turning Ideas Into Scalable Ventures
            </h3>

            <p className="entrance-desc">
              We partner with founders to build, launch, and grow sustainable 
              businesses with the right strategy and execution.
            </p>
          </div>

        </div>

        {/* CARDS GRID */}
        <div className="admissions-cards">

          <div className="admission-card">
            <img src="https://i.pinimg.com/736x/ef/e8/ef/efe8efb0bf9d554aff9660e0713a8108.jpg" alt="Venture Building" />
            <div className="card-overlay">
              <h4>Venture Building</h4>
              <div className="card-hover-content">
                <p>
                  We help entrepreneurs turn ideas into scalable businesses with our proven frameworks.
                </p>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

          <div className="admission-card">
            <img src="https://i.pinimg.com/1200x/bb/b0/4c/bbb04c3d04be186be7354bb961c50616.jpg" alt="Capital Investment" />
            <div className="card-overlay">
              <h4>Capital Investment</h4>
              <div className="card-hover-content">
                <p>
                  Access growth capital with flexible terms designed for your stage.
                </p>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

          <div className="admission-card">
            <img src="https://i.pinimg.com/1200x/b1/4c/c1/b14cc161cce4383a47cfaebca0af04cb.jpg" alt="Strategic Support" />
            <div className="card-overlay">
              <h4>Strategic Support</h4>
              <div className="card-hover-content">
                <p>
                  Get hands-on guidance from operators who've scaled companies.
                </p>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

          <div className="admission-card">
            <img src="https://ryleni.com/venture_studio_team_square.jpg" alt="Growth & Operations" />
            <div className="card-overlay">
              <h4>Growth & Operations</h4>
              <div className="card-hover-content">
                <p>
                  Leverage data-driven frameworks to accelerate your growth.
                </p>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdmissionsSection;
