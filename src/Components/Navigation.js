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
        <Link to="/" className="navLogo">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="homeNav">
        <ul className={`navList ${menuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/" className="navLink">Home</Link></li>
          <li><Link to="/our-program" className="navLink">Our Program</Link></li>
          <li><Link to="/impact" className="navLink">Impact</Link></li>
          <li><Link to="/resources" className="navLink">Resources</Link></li>
          <li><Link to="/Description-us" className="navLink">Description Us</Link></li>
          <li><Link to="/contact" className="navLink">Contact</Link></li>
          <li><Link to="/donate" className="navLink">Donate</Link></li>
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