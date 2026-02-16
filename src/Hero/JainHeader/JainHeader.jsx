import React, { useState } from "react";
import "./JainHeader.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const JainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="jain-header">
      <div className="container jain-nav">

        {/* LEFT LOGO + NAME */}
        <div className="jain-logo">
          <img
            src="https://ryleni.com/assets/white-ico-mRDQACV7.jpg"
            alt="Ryleni"
          />
          <span className="logo-text">Ryleni</span>
        </div>

        {/* NAV LINKS */}
        <nav className={`jain-links ${menuOpen ? "active" : ""}`}>
          <a href="#">Services</a>
          <a href="#">How It Works</a>
          <a href="#">Portfolio</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="jain-icons">
          <a href="#" className="apply-btn">Apply Now</a>
          <FaSearch className="search-icon" />

          {/* Toggle Icon */}
          {menuOpen ? (
            <FaTimes
              className="hamburger"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="hamburger"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* MOBILE OVERLAY */}
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

      </div>
    </header>
  );
};

export default JainHeader;
