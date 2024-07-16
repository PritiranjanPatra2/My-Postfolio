import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBlog, FaStar, FaBars, FaTimes } from 'react-icons/fa';

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>Patra Dev</h1>
      </div>
      <div className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <Link to="/home"><FaHome /> Home</Link>
        <Link to="/about"><FaUser /> About</Link>
        <Link to="/certificates"><FaStar /> Certificates</Link>
        <Link to="/projects"><FaProjectDiagram /> Projects</Link>
        <Link to="/resume"><FaFileAlt /> Resume</Link>
        <Link to="/contact"><FaBlog /> Contact</Link>
        <Link to="/more"><FaBlog /> More</Link>
      </div>
      <div className="star-icon">
        <a href="https://github.com/PritiranjanPatra2"><FaStar /></a>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
