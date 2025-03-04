import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      
      {/* Hamburger Icon for mobile view */}
      <div className="hamburger" onClick={toggleMenu}>
        <span activeClass='active' to="intro" smooth={true} duration={500} offset={-100} className="bar"></span>
        <span activeClass='active' to="intro" smooth={true} duration={500} offset={-100} className="bar"></span>
        <span activeClass='active' to="intro" smooth={true} duration={500} offset={-100} className="bar"></span>
      </div>

      {/* Navbar links */}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link activeClass='active' to="intro" smooth={true} duration={500} offset={-100} className="menu-item">Home</Link>
        <Link activeClass='active' to="skills" smooth={true} duration={500} offset={-10} className="menu-item">About</Link>
        <Link activeClass='active' to="Certificates" smooth={true} duration={500} offset={-100} className="menu-item">Certificates</Link>
        <Link activeClass='active' to="ContactPage" smooth={true} duration={500} offset={-100} className="menu-item">Contact Me</Link>
      </div>

    </nav>
  );
};

export default Navbar;
