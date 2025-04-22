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
  <p>Hey there! I'm the kind of person who started coding one day... and forgot to stop 😄</p>
  <p>I know how to talk to computers using languages like <span className="highlight">Java</span> and <span className="highlight">JavaScript</span>. No, they’re not the same — but they both make cool stuff happen!</p>
  <p>I love building websites and apps that actually do things — like booking rooms, sharing files, or just looking awesome.</p>
  <p>I use tools like <span className="highlight">React.js</span> to build the front (the part you see), and <span className="highlight">Node.js</span> and <span className="highlight">Express.js</span> for the back (the brain of the app). For storing data, I use <span className="highlight">MongoDB</span>.</p>
  <p>I also enjoy designing cool and clean websites with <span className="highlight">HTML, CSS, Tailwind CSS</span>, and sometimes even <span className="highlight">Next.js</span>.</p>
  <p>So yeah, I’m just a guy who loves to create fun and useful things on the internet. Nice to meet you! 👋</p>
</div>

  <div className="introduce-image-content">
    <img src={myimage} alt="Profile Illustration" />
  </div>
</div>

    </>
  );
}

export default Home;
