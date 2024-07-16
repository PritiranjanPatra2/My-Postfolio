import React from 'react';
import './About.css'; 
import illustration from '../../Assets/bg.png'; 
import daysicode from '../../Assets/days.png';
import { FaSlack, FaJava } from 'react-icons/fa'; // Import icons
import { SiVisualstudiocode, SiPostman, SiMacos, SiVercel, SiCplusplus, SiJavascript, SiGo, SiNodedotjs, SiReact, SiSolidity, SiMongodb, SiNextdotjs, SiGit, SiFirebase, SiRedis, SiPostgresql, SiPython, SiHtml5, SiCss3, SiMysql, SiTailwindcss, SiChartdotjs, SiWindows, SiGithub, SiSelenium, SiApachemaven, SiTestcafe } from 'react-icons/si';

function About() {
  return (
    <>
      <div className="About-page">
        <div className="text-content">
          <h2>Know Who I'M</h2>
          <p>
            Hi Everyone, I am <a href="https://github.com/PritiranjanPatra2">Pritiranjan Patra</a> from <a href="https://en.wikipedia.org/wiki/Bhubaneswar">Bhubaneswar, India.</a>
           
            
            <br />
            I have completed Integrated MCA (IMCA) at Utkal University.
          </p>
          <p>Apart from coding, some other activities that I love to do!</p>
          <ul>
            <li>Playing Games</li>
            <li>Watching Movies</li>
            <li>Travelling</li>
          </ul>
          <p className="quote">"Strive to build things that make a difference!"</p>
          <p className="signature">— Pritiranjan</p>
        </div>
        <div className="image-content">
          <img src={illustration} alt="Illustration" />
        </div>
      </div>
      
      <div className="skillset-section">
        <h2>Professional <span className="highlight">Skillset</span></h2>
        <div className="skills">
          <div className="skill"><SiHtml5 className="icon" /><span>HTML</span></div>
          <div className="skill"><SiCss3 className="icon" /><span>CSS</span></div>
          <div className="skill"><SiJavascript className="icon" /><span>JavaScript</span></div>
          <div className="skill"><SiChartdotjs className="icon" /><span>Chart.js</span></div>
          <div className="skill"><SiTailwindcss className="icon" /><span>Tailwind CSS</span></div>
          <div className="skill"><SiMysql className="icon" /><span>MySQL</span></div>
          <div className="skill"><FaJava className="icon" /><span>Java</span></div>
          <div className="skill"><SiCplusplus className="icon" /><span>C++</span></div>
          <div className="skill"><SiReact className="icon" /><span>React</span></div>
          <div className="skill"><SiGit className="icon" /><span>Git</span></div>
          <div className="skill"><SiPython className="icon" /><span>Python</span></div>
          <div className="skill"><SiCplusplus className="icon" /><span>C</span></div>
        </div>
      </div>

      <div className="tools-section">
        <h2>Tools I <span className="highlight">Use</span></h2>
        <div className="tools">
          <div className="tool"><SiWindows className="icon" /><span>Windows</span></div>
          
          <div className="tool"><SiVisualstudiocode className="icon" /><span>VS Code</span></div>
          <div className="tool"><FaSlack className="icon" /><span>Slack</span></div>
          <div className="tool"><SiVercel className="icon" /><span>Vercel</span></div>
          <div className="tool"><SiGit className="icon" /><span>Git</span></div>
          <div className="tool"><SiGithub className="icon" /><span>GitHub</span></div>
          <div className="tool"><SiSelenium className="icon" /><span>Selenium</span></div>
          <div className="tool"><SiApachemaven className="icon" /><span>Maven</span></div>
          <div className="tool"><SiTestcafe className="icon" /><span>TestNG</span></div>
        </div>
      </div>

      <div className="coding-days-section">
        <h2>Days I <span className="highlight">Code</span></h2>
        <img src={daysicode} alt="Days I Code" className="coding-days-image" />
        <p>472 contributions in the last year</p>
      </div>
    </>
  );
}

export default About;
