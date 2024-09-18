import React from 'react';
import './Projects.css';
import background from '../../Assets/bg.png'; 


const projects = [
  {
    image: background,
    title: "Google Drive Clone",
    description:"Developed a Google Drive clone using React JS and Material UI, integrated with Firebase for real-time database and Google Authentication. The project replicates core functionalities of Google Drive, offering file upload, storage management, and a user-friendly interface that mimics its layout and features",
    githubLink: "https://github.com/PritiranjanPatra2/drive",
    demoLink: "https://drive-psi-one.vercel.app/"

  },
  {
    image: background,
    title: "MetaFinder-The ultimate search Engine",
    description: "MetaFinder, a comprehensive tool designed to enhance your information search experience by seamlessly integrating multiple APIs and providing an intuitive user interface.",
    githubLink: "https://github.com/PritiranjanPatra2/MetaFinder-Ultimate-Search-Engiine",
    demoLink: "https://pritiranjanpatra2.github.io/MetaFinder-Ultimate-Search-Engiine/"
  },
  {
    image: background,
    title: "Url Shortner",
    description: "Developed a URL shortner app using React,NodeJs,MongoDB. The app allows users to input a URL and receive a shortened version in real-time.",
    githubLink: "https://github.com/PritiranjanPatra2/url-shortner-",
    demoLink: "https://url-shortner-iic0.onrender.com/"
  },
  {
    image: background,
    title: "Language Translator",
    description:"Developed a language translator app using React. The app allows users to input text and receive translations in real-time across multiple languages.",
    githubLink: "https://github.com/PritiranjanPatra2/Text-Translator",
    demoLink: "https://text-translator-topaz.vercel.app/"

  },{
    image: background,
    title: "Markdown Editor",
    description: "Developed a Markdown editor app using React. The app allows users to input text and receive formatted Markdown code.",
    githubLink: "https://github.com/PritiranjanPatra2/NoteCraft",
    demoLink: "https://note-craft-gamma.vercel.app/"
  },
  {
    image: background,
    title: "Image Generator",
    description: "Developed a UI where you can find any Image as your Choice within a second",
    githubLink: "https://github.com/PritiranjanPatra2/Image-Generator",
    demoLink: "https://image-generator-psi-flax.vercel.app/"
  },
  {
    image: background,
    title: "Pokemon",
    description: "Search Pokemon",
    githubLink: "https://github.com/PritiranjanPatra2/GeeksterMon",
    demoLink: "https://pritiranjanpatra2.github.io/GeeksterMon/"
  },
  {
    image: background,
    title: "Boosted Electric Scooters and Skateboards, Longboards",
    description: "We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.",
    githubLink: "https://github.com/PritiranjanPatra2/Boosted.com",
    demoLink: "https://pritiranjanpatra2.github.io/Boosted.com/"
  },
  {
    image: background,
    title: "EmojiFinder",
    description: "Discover emojis effortlessly with our sleek Emoji Finder app! Simply type in keywords and explore a world of expressive icons. Click to copy your favorites instantly.",
    githubLink: "https://github.com/PritiranjanPatra2/Emoji-Finder",
    demoLink: "https://pritiranjanpatra2.github.io/Emoji-Finder/"
  },
  {
    image: background,
    title: "StickyNotes",
    description: " Whether you need to keep track of tasks, jot down ideas, or just stay organized, this app is designed to help!.",
    githubLink: "https://github.com/PritiranjanPatra2/Sticky-Notes",
    demoLink: "https://pritiranjanpatra2.github.io/Sticky-Notes/"
  },
  {
    image: background,
    title: "Pantaloons Clone",
    description: "Welcome to our Family",
    githubLink: "https://github.com/PritiranjanPatra2/Pantaloons",
    demoLink: "https://pritiranjanpatra2.github.io/Pantaloons/"
  },

];

function Projects() {
  return (
    <div className="projects-section">
      <h1>My Recent <span className="highlight">Works</span></h1>
      <p>Here are a few projects I've worked on recently.</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.title} Project`} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.githubLink} className="button">GitHub</a>
              <a href={project.demoLink} className="button">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
