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
          <h2 className="dynamic-text">Full Stack Developer</h2>
        </div>
        <div className="image-content">
          <img src={profileIllustration} alt="Profile Illustration" />
        </div>
      </div>
      <div className="introduce-section">
  <div className="introduce-text-content">
    <h1>LET ME <span className="highlight">INTRODUCE</span> MYSELF</h1>
    <p> I fell in love with programming and have gained significant experience and skills over the years.</p>
    <p> I am fluent in languages like <span className="highlight">Java and JavaScript.</span> </p>
    <p> My field of interest includes building scalable <span className="highlight">Web Applications and Products</span> and exploring areas related to <span className="highlight">Full-Stack.</span> </p>
    <p> I enjoy developing full-stack applications using <span className="highlight">React.js</span> for frontend, <span className="highlight">Node.js</span> and <span className="highlight">Express.js</span> for backend, and <span className="highlight">MongoDB</span> for database management.</p>
    <p> I also love working with technologies like <span className="highlight">HTML, CSS, Tailwind CSS, MySQL</span>, and <span className="highlight">Next.js</span> to build modern, responsive UIs.</p>
  </div>
  <div className="introduce-image-content">
    <img src={myimage} alt="Profile Illustration" />
  </div>
</div>

    </>
  );
}

export default Home;
