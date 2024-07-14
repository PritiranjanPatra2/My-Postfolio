import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-section">
      <h1>Contact <span className="highlight">Me</span></h1>
      <p>Feel free to reach out to me through any of the following methods:</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>patrapritiranjan11@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 9861279032</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Bhubaneswar, India</span>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button">Send</button>
          </form>
        </div>
      </div>

      <div className="social-media">
        <h2>Find Me On</h2>
        <div className="social-icons">
          <a href="https://github.com/PritiranjanPatra2" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/pritiranjan-patra-771a91287/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
