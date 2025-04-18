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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-program">Our Program</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/description-us">Description Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/donate">Donate</Link></li>
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