import React from 'react';
import './Projects.css';
import chatifyImage from '../../Assets/bg.png'; 
import bitsOfCodeImage from '../../Assets/bg.png';
import editorioImage from '../../Assets/bg.png'; 

function Projects() {
  return (
    <div className="projects-section">
      <h1>My Recent <span className="highlight">Works</span></h1>
      <p>Here are a few projects I've worked on recently.</p>
      <div className="projects">
        <div className="project-card">
          <img src={chatifyImage} alt="Chatify Project" />
          <h2>MetaFinder-The ultimate search Engine</h2>
          <p>MetaFinder, a comprehensive tool designed to enhance your information search experience by seamlessly integrating multiple APIs and providing an intuitive user interface.</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/MetaFinder-Ultimate-Search-Engiine" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/MetaFinder-Ultimate-Search-Engiine/" className="button">Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={bitsOfCodeImage} alt="Bits of Code Project" />
          <h2>Pokemon</h2>
          <p>Search Pokemon</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/GeeksterMon" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/GeeksterMon/" className="button">Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={editorioImage} alt="Editor.io Project" />
          <h2>Boosted Electric Scooters and Skateboards, Longboards</h2>
          <p>We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/Boosted.com" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/Boosted.com/" className="button">Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={editorioImage} alt="Editor.io Project" />
          <h2>Boosted Electric Scooters and Skateboards, Longboards</h2>
          <p>We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/Boosted.com" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/Boosted.com/" className="button">Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={editorioImage} alt="Editor.io Project" />
          <h2>Boosted Electric Scooters and Skateboards, Longboards</h2>
          <p>We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/Boosted.com" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/Boosted.com/" className="button">Demo</a>
          </div>
        </div>
        <div className="project-card">
          <img src={editorioImage} alt="Editor.io Project" />
          <h2>Boosted Electric Scooters and Skateboards, Longboards</h2>
          <p>We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.</p>
          <div className="buttons">
            <a href="https://github.com/PritiranjanPatra2/Boosted.com" className="button">GitHub</a>
            <a href="https://pritiranjanpatra2.github.io/Boosted.com/" className="button">Demo</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
