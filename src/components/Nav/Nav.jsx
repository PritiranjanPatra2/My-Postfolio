import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBlog, FaStar } from 'react-icons/fa';

function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Patra Dev</h1>
      </div>
      <div className="nav-links">
        <Link to="/home"><FaHome /> Home</Link>
        
        <Link to="/about"><FaUser /> About</Link>
        <Link to="/certificates"><FaStar /> Certificates</Link>
        <Link to="/projects"><FaProjectDiagram /> Projects</Link>
        <Link to="/resume"><FaFileAlt /> Resume</Link>
        <Link to="/contact"><FaBlog /> Contact</Link>
      </div>
      <div className="star-icon">
      <a href="https://github.com/PritiranjanPatra2"><FaStar /></a>
        
      </div>
    </div>
  );
}

export default Nav;
