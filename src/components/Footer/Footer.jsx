import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-nav">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/more">More</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contact Me</h2>
          <p><FaEnvelope className="icon" /> patrapritiranjan11@gmail.com</p>
          <p><FaPhone className="icon" /> +91 9861279032</p>
        </div>

        <div className="footer-social">
          <h2>Follow Me</h2>
          <div className="social-icons">
            <a href="https://github.com/PritiranjanPatra2" target="_blank" rel="noopener noreferrer"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/in/pritiranjan-patra-771a91287/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Pritiranjan Patra. All Rights Reserved. | Designed by Pritiranjan Patra</p>
      </div>
    </footer>
  );
}

export default Footer;
