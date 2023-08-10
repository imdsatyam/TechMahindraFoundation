import "../Footer/Footer.css";
import FooterBg from "../../Assets/FooterBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div
      className="Footer"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${FooterBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="quick" style={{ width: "35%" }}>
        <h3>Quick Links</h3>
        <ul className="Quick__list">
          <li className="Quick__item">
            <a href="#Home" className="quick__link">
              {">"} Vision & CSR Policy
            </a>
          </li>
          <li className="Quick__item">
            <a href="#Footer" className="quick__link">
              {">"} Contact Us
            </a>
          </li>
          <li className="Quick__item">
            <a href="#Home" className="quick__link">
              {">"} Award & Recognition
            </a>
          </li>
          <li className="Quick__item">
            <a href="#Home" className="quick__link">
              {">"} Career
            </a>
          </li>
          <li className="Quick__item">
            <a href="#Home" className="quick__link">
              {">"} Privacy Policy
            </a>
          </li>
          <li className="Quick__item">
            <a href="#Home" className="quick__link">
              {">"} Accessibility Statement
            </a>
          </li>
        </ul>
      </div>
      <div className="address">
        <h3>Address</h3>
        <h4>
          Harijan Sevak Sangh Campus, Gandhi Ashram Kingsway Camp, New Delhi -
          110009
        </h4>
        <a href="mailto:info.techmahindrafoundation.org">
          Email: info.techmahindrafoundation.org
        </a>
        <h3>Connect with us:</h3>
        <a
          href="https://www.Facebook.com/techmahindra"
          className="Facebook social"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.Twitter.com/techmahindra"
          className="Twitter social"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.Instagram.com/techmahindra"
          className="Instagram social"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.Linkedin.com/techmahindra"
          className="Linkedin social"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.Youtube.com/techmahindra"
          className="Youtube social"
          style={{ marginRight: "1rem" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
      <div className="newsletter">
        <h3>Join The Newsletter</h3>
        <form>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email Here...."
          />
        </form>
        <button className="bbtn">Subscrible Now</button>
      </div>
      <div className="copywrite"></div>
    </div>
  );
}

export default Footer;
