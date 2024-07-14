import React, { useEffect } from 'react';
import './Home.css'; 
import profileIllustration from '../../Assets/bg.png';
import myimage from '../../Assets/my.jpg';

function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.querySelector('.dynamic-text');
      if (element) {
        const randomX = Math.floor(Math.random() * 100);
        const randomY = Math.floor(Math.random() * 100);
        element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="profile-section">
        <div className="text-content">
          <p>Hi There! <span className="wave">👋</span></p>
          <h1>I'M <span className="highlight">Pritiranjan Patra</span></h1>
          <h2 className="dynamic-text">Frontend Developer</h2>
        </div>
        <div className="image-content">
          <img src={profileIllustration} alt="Profile Illustration" />
        </div>
      </div>
      <div className="introduce-section">
        <div className="introduce-text-content">
          <h1>LET ME <span className="highlight">INTRODUCE</span> MYSELF</h1>
          <p> I fell in love with programming and have gained significant experience and skills over the years.</p>
          <p> I am fluent in languages like <span className="highlight">Java and Javascript.</span> </p>
          <p> My field of interest includes building new <span className="highlight">Web Technologies and Products</span> and also in areas related to <span className="highlight">Blockchain.</span> </p>
          <p> Whenever possible, I apply my passion for developing products using <span className="highlight">HTML, CSS, Tailwind CSS, MySQL</span> and <span className="highlight">Modern Javascript Libraries and Frameworks</span> like <span className="highlight">React.js</span> and <span className="highlight">Next.js</span>.</p>
        </div>
        <div className="introduce-image-content">
          <img src={myimage} alt="Profile Illustration" />
        </div>
      </div>
    </>
  );
}

export default Home;
