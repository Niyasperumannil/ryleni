import React from "react";
import "./FooterSection.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        {/* SUBSCRIBE SECTION */}
        <div className="subscribe-row">

          <h2 className="subscribe-title">
            Ready to Build<br />
            Something <span>Great</span>
          </h2>

          <div className="subscribe-form">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" />
              <button>Apply for Funding</button>
            </div>

            <div className="privacy-check">
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy">
                I agree to the <a href="#">privacy policy</a>
              </label>
            </div>
          </div>

        </div>

        {/* FOOTER LINKS */}
        <div className="footer-links">

          {/* Address */}
          <div className="footer-col address">
            <p>
              Venture studio backing founders building the next generation of category leaders.
            </p>

            <div className="contact-item">
              <FaPhoneAlt /> +91 92073 55555
            </div>

            <div className="contact-item">
              <FaEnvelope /> enquiry.ryleni.ac.in
            </div>

            <div className="social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Study at JU */}
          <div className="footer-col">
            <h4>Study at JU ↗</h4>
            <ul>
              <li>About</li>
              <li>Process</li>
              <li>Portpolio</li>
              <li>Apply</li>
              <li>International Applicants</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="footer-col">
            <h4>About Us ↗</h4>
            <ul>
              <li>Apply for Funding</li>
              <li>Schedule a Call</li>
              <li>Join Our Network</li>
              <li>Student Stories</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links ↗</h4>
            <ul>
              <li>Careers</li>
              <li>Brochure</li>
            </ul>
          </div>

          {/* Right Links */}
          <div className="footer-col">
            <h4>Events ↗</h4>
            <h4>News ↗</h4>
            <h4>FAQ ↗</h4>

            <button className="move-top">↑ Move Top</button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>© 2026 JAIN University - All rights reserved</p>

          <div className="bottom-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
            <span>Site Map</span>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default FooterSection;
