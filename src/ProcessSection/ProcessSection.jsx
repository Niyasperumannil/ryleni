import React from "react";
import "./ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">

        {/* HEADER */}
        <div className="process-top">

          <div className="process-left">
            <span className="process-tag">THE PROCESS</span>

            <h2 className="process-title">
              A clear path from idea to scale.
            </h2>

            <p className="process-subtitle">
              Our streamlined process gets you from application to investment 
              in weeks, not months.
            </p>
          </div>

        </div>

        {/* PROCESS STEPS */}
        <div className="process-cards">

          <div className="process-card">
            <div className="step-number">1</div>
            <h3>Apply</h3>
            <p>
              Share your thesis, early traction, and why now. 
              We respond to every qualified application.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">2</div>
            <h3>Evaluation</h3>
            <p>
              We meet executives with partners to stress-test 
              the market, model, and team complimentary.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">3</div>
            <h3>Studio Build</h3>
            <p>
              Run a rapid-build program with dedicated product, 
              design, and talent support.
            </p>
          </div>

          <div className="process-card">
            <div className="step-number">4</div>
            <h3>Launch & Scale</h3>
            <p>
              Raise follow-on capital, unlock our corporate network, 
              and scale into new markets.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="process-cta">
          <button className="process-btn">
            Start Your Application →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
