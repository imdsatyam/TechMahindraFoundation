import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.png';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mainNav">
      <div className="logo">
        <a href="#Home" className="navLogo">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="homeNav">
        <ul className={`navList ${menuOpen ? 'mobile-active' : ''}`}>
          <li className="nav__item">
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/our-program" className="navLink">Our Program</Link>
          </li>
          <li className="nav__item">
            <Link to="/impact" className="navLink">Impact</Link>
          </li>
          <li className="nav__item">
            <Link to="/resources" className="navLink">Resources</Link>
          </li>
          <li className="nav__item">
            <Link to="/Description-us" className="navLink">Description Us</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="navLink">Contact</Link>
          </li>
          <li className="nav__item">
            <Link to="/donate" className="navLink">Donate</Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
