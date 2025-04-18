import React from "react";
import FooterBg from "../Assets/FooterBg.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        opacity: ' 0.9'
      }}
    >
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>› Vision & CSR Policy</li>
            <li>› Contact Us</li>
            <li>› Awards & Recognition</li>
            <li>› Career</li>
            <li>› Privacy Policy</li>
            <li>› Accessibility Statement</li>
          </ul>
        </div>

        <div className="footer-section address">
          <h4>Address</h4>
          <p>
            Harijan Sevak Sangh Campus, Gandhi Ashram<br />
            Kingsway Camp, New Delhi – 110009<br />
            Email: info@techmahindrafoundation.org
          </p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Join The Newsletter</h4>
          <input type="email" placeholder="Your Email Here..." />
          <button>SUBSCRIBE NOW</button>
        </div>
      </div>

      <div className="footer-bottom">
        © All right reserved 2023 Tech Mahindra Foundation
      </div>
    </footer>
  );
}

export default Footer;
