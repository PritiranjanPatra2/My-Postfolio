import React from 'react';
import './Resume.css';
import resumeImage from '../../Assets/image.png'; 
import resumePDF from '../../Assets/resume.pdf'; 

function Resume() {
  return (
    <div className="resume-section">
      <a href={resumePDF} className="download-button" download>
        <button className="button">Download CV</button>
      </a>
      <img src={resumeImage} alt="Resume" className="resume-image" />
    </div>
  );
}

export default Resume;
