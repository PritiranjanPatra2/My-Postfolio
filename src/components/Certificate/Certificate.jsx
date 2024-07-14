import React from 'react';
import './Certificate.css';
import cert from '../../Assets/cert.png'; 
import cert2 from '../../Assets/cert2.png'; 
// import cert3 from '../../Assets/cert3.png'; 

function Certificate() {
  const certificates = [
    {
      title: 'Java (Basic) Certificate',
      description: 'Certification for completing the Java (Basic).',
      image: cert,
      link: 'https://www.hackerrank.com/certificates/e8013fbe968e'
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      description: 'Problem Solving (Basic) Certificate',
      image: cert,
      link: 'Certification for completing the Problem Solving (Basic).'
    },
    {
      title: 'JavaScript (Basic) Certificate',
      description: 'Certification for completing the JavaScript (Basic).',
      image: cert,
      link: 'https://www.hackerrank.com/certificates/00d1f90b0097'
    },
        {
      title: 'Selenium Webdriver',
      description: 'Certification for completing the Selenium Webdriver.',
      image: cert2,
      link: 'https://www.udemy.com/certificate/UC-294d2e7e-17d3-4204-b22c-61b4654c61de/'
    },
    {
      title: 'Software Testing Bootcamp',
      description: 'Certification for Software Testing Bootcamp',
      image: cert2,
      link: 'https://www.udemy.com/certificate/UC-333aabf0-148f-45ec-a318-6d50b0d0caf3/'
    },
    {
      title: 'C for Beginners',
      description: 'Certification for completing the  C for Beginners.',
      image: cert2,
      link: 'https://www.udemy.com/certificate/UC-2a49d33e-13da-4763-a4c4-25b9d0707b32/'
    },
  ];

  return (
    <div className="certificate-section">
      <h1>My <span className="highlight">Certificates</span></h1>
      <p>Here are some of the certificates I've earned through various courses and programs.</p>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <a href={cert.link} className="button" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
