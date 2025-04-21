import React from 'react';
import './Projects.css';
import background from '../../Assets/bg.png'; 
import JobHive from "../../Assets/JobHive.png"
import GreenCart from "../../Assets/GreenCart.png"
import BitLog from "../../Assets/BitLog.png"
import Drive from "../../Assets/Drive.png"
import Shortify from "../../Assets/Shortify.png"
import MetaFinder from "../../Assets/MetaFinder.png"
import Translator from "../../Assets/Translator.png"
import ImageGene from "../../Assets/ImageGene.png"
import MarkEd from "../../Assets/MarkEd.png"
import Emoji from "../../Assets/EmojiFinder.png"
import Pokemon from "../../Assets/Pokemon.png"
import Boosted from "../../Assets/Boosted.png"
import Sticky from "../../Assets/StickyNotes.png"
import Pantaloons from "../../Assets/Pantaloons.png"
import Musify from "../../Assets/Musify.png"
import CleanCUt from "../../Assets/CleanCUt.png"


const projects = [
  {
    image: JobHive,
    title: "Full-Stack Job Portal",
    description:"Developed a job portal enabling job seekers to sign up, sign in, update, and delete their roles, view job postings, apply for jobs, and upload or edit resumes. Recruiters can sign up, sign in, add job postings, manage job visibility, approve or reject job applications, and download resumes. Ensures secure authentication and authorization for both job seekers and recruiters." 
    , githubLink: "https://github.com/PritiranjanPatra2/JobHive",
    demoLink: "https://job-hive-pp.vercel.app/"

  },
  {
    image: GreenCart,
    title: "Full Stack Grocery Delivery Website",
    description:"Developed a full stack grocery delivery platform – Green Cart – that allows customers to browse products, manage cart items, place orders, and track order history, while admins can manage inventory, update product listings, and monitor customer orders. The platform includes secure authentication and authorization using JWT." 
    , githubLink: "https://github.com/PritiranjanPatra2/GreenCart",
    demoLink: "https://green-cart-pp.vercel.app/"

  },
  {
    image: CleanCUt,
    title: "Full-stack Background Removal Website",
    description:"Developed a full-stack background remover website called CleanCUt. The platform allows users to sign up, sign in, and perform background removal on images. Integrated secure authentication and authorization to ensure a safe user experience also user can buy credits",
    githubLink: "https://github.com/PritiranjanPatra2/CleanCut",
    demoLink: "https://github.com/PritiranjanPatra2/CleanCut"
  },
  {
    image: BitLog,
    title: "Full-Stack Blog Website",
    description:"Developed a blog Website enabling users to sign up, sign in, view Blogs, add Blogs, Like ,Comment ,View Profile. Ensures secure authentication and authorization for both job seekers and recruiters." 
    , githubLink: "https://github.com/PritiranjanPatra2/BitLog",
    demoLink: "https://bit-log-pp.vercel.app/"

  },
  {
    image: Drive,
    title: "Google Drive Clone",
    description:"Developed a Google Drive clone using React JS and Material UI, integrated with Firebase for real-time database and Google Authentication. The project replicates core functionalities of Google Drive, offering file upload, storage management, and a user-friendly interface that mimics its layout and features",
    githubLink: "https://github.com/PritiranjanPatra2/drive",
    demoLink: "https://drive-psi-one.vercel.app/"

  },
  {
    image: Musify,
    title: "Spotify Clone",
    description:"Developed a Spotify clone using React JS and Clerk , where user can sign in through there gmail account or goole account and can listen their favorite song",
    githubLink: "https://github.com/PritiranjanPatra2/Musify",
    demoLink: "https://musify-blond.vercel.app/"

  },
  {
    image: MetaFinder,
    title: "MetaFinder-The ultimate search Engine",
    description: "MetaFinder, a comprehensive tool designed to enhance your information search experience by seamlessly integrating multiple APIs and providing an intuitive user interface.",
    githubLink: "https://github.com/PritiranjanPatra2/MetaFinder-Ultimate-Search-Engiine",
    demoLink: "https://pritiranjanpatra2.github.io/MetaFinder-Ultimate-Search-Engiine/"
  },
  {
    image: Shortify,
    title: "Url Shortner",
    description: "Developed a URL shortner app using React,NodeJs,MongoDB. The app allows users to input a URL and receive a shortened version in real-time.",
    githubLink: "https://github.com/PritiranjanPatra2/url-shortner-",
    demoLink: "https://url-shortner-iic0.onrender.com/"
  },
  {
    image: Translator,
    title: "Language Translator",
    description:"Developed a language translator app using React. The app allows users to input text and receive translations in real-time across multiple languages.",
    githubLink: "https://github.com/PritiranjanPatra2/Text-Translator",
    demoLink: "https://text-translator-topaz.vercel.app/"

  },{
    image: MarkEd,
    title: "Markdown Editor",
    description: "Developed a Markdown editor app using React. The app allows users to input text and receive formatted Markdown code.",
    githubLink: "https://github.com/PritiranjanPatra2/NoteCraft",
    demoLink: "https://note-craft-gamma.vercel.app/"
  },
  {
    image: ImageGene,
    title: "Image Generator",
    description: "Developed a UI where you can find any Image as your Choice within a second",
    githubLink: "https://github.com/PritiranjanPatra2/Image-Generator",
    demoLink: "https://image-generator-psi-flax.vercel.app/"
  },
  {
    image: Pokemon,
    title: "Pokemon",
    description: "Search Pokemon",
    githubLink: "https://github.com/PritiranjanPatra2/GeeksterMon",
    demoLink: "https://pritiranjanpatra2.github.io/GeeksterMon/"
  },
  {
    image: Boosted,
    title: "Boosted Electric Scooters and Skateboards, Longboards",
    description: "We provide you with the latest from Boosted. Boosted Revs Scooters, Boosted Plus, Boosted Stealth, Boosted Mini's are all available and on sale.",
    githubLink: "https://github.com/PritiranjanPatra2/Boosted.com",
    demoLink: "https://pritiranjanpatra2.github.io/Boosted.com/"
  },
  {
    image: Emoji,
    title: "EmojiFinder",
    description: "Discover emojis effortlessly with our sleek Emoji Finder app! Simply type in keywords and explore a world of expressive icons. Click to copy your favorites instantly.",
    githubLink: "https://github.com/PritiranjanPatra2/Emoji-Finder",
    demoLink: "https://pritiranjanpatra2.github.io/Emoji-Finder/"
  },
  {
    image: Sticky,
    title: "StickyNotes",
    description: " Whether you need to keep track of tasks, jot down ideas, or just stay organized, this app is designed to help!.",
    githubLink: "https://github.com/PritiranjanPatra2/Sticky-Notes",
    demoLink: "https://pritiranjanpatra2.github.io/Sticky-Notes/"
  },
  {
    image: Pantaloons,
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
            <p>{project.description.length>100 ?project.description.substring(0,100)+" ...":project.description}</p>
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
