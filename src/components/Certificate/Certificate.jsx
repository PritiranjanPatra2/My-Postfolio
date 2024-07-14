import React from 'react';
import './Certificate.css';
import cert from '../../Assets/cert.png'; 
// import cert2 from '../../Assets/cert2.png'; 
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
