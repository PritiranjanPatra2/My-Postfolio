import React from 'react';
import './Projects.css';
import background from '../../Assets/bg.png'; 


const projects = [
  {
    image: background,
    title: "MetaFinder-The ultimate search Engine",
    description: "MetaFinder, a comprehensive tool designed to enhance your information search experience by seamlessly integrating multiple APIs and providing an intuitive user interface.",
    githubLink: "https://github.com/PritiranjanPatra2/MetaFinder-Ultimate-Search-Engiine",
    demoLink: "https://pritiranjanpatra2.github.io/MetaFinder-Ultimate-Search-Engiine/"
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
