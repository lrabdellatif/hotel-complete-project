import React from "react";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// استيراد صورة اللوجو
import logo from "../images/Vintage and Luxury Royal Hotel Ornamental Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About / Logo */}
        <div className="footer-about">
          <img src={logo} alt="Hotel Logo" />
          <p>
            Experience luxury and comfort like never before. Your perfect stay
            awaits at Aurora Palace.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rooms & Suites</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Book Now</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +213 123 456 789</p>
          <p>📧 info@aurorapalace.com</p>
          <p>📍 123 Luxury Street, Algiers, Algeria</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Aurora Palace. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
