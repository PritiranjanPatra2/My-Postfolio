import React from "react";
import "./Certificate.css";
import JavascriptBascic from "../../Assets/cert.png";
import softwaretesting from "../../Assets/softwaretesting.png";
import Selenium from "../../Assets/cert2.png";
import api from "../../Assets/Api.png";
import c from "../../Assets/c.png";
import Database from "../../Assets/Database.png";
import flexbox from "../../Assets/flexbox.png";
import htmlandcss from "../../Assets/htmlandcss.png";
import Sql from "../../Assets/Sql.png";
import js from "../../Assets/js.png";
import JavaDatabase from "../../Assets/JavaDatabase.png";
import Responsive from "../../Assets/Responsive.png";
import Xpath from "../../Assets/Xpath.png";

import Sqlin from "../../Assets/Sql-in.png";
import Sqlba from "../../Assets/Sql-ba.png";
import Pythonba from "../../Assets/Python-Ba.png";
import JavaBa from "../../Assets/Java-Ba.png";
import Problem from "../../Assets/Problem.png";
import CssBasic from "../../Assets/CssBasic.png";
import Presentations from "../../Assets/Presentations.png";
import Ace from "../../Assets/Ace.png";
import Soft from "../../Assets/Soft.png";
import Group from "../../Assets/Group.png";
import chatgpt from "../../Assets/chatgpt.png";
import Resume from "../../Assets/Resume.png";
import Ethical from "../../Assets/Ethical.png";
import fullStackE from "../../Assets/FullStackFoodDelivery.png";
import javascript from "../../Assets/JavascriptBasic.png";
import foodDelivery from "../../Assets/FullStackFoodDelivery.png";
import reacthook from "../../Assets/ReactHooks.png";
import nesly from "../../Assets/nesly.png";
import Postman from "../../Assets/Postman.png"
import Tata from "../../Assets/Tata.jpg"
import FullStack from "../../Assets/FullStack.png"
import Codepi from "../../Assets/CodePi.jpg"

function Certificate() {
  const certificates = [
    {
      title: "Full Stack Web Development By Geekster",
      description: "Certification for completing the Full Stack Web Development Course.",
      image: FullStack,
      link: "https://ibb.co/B5zQ5vFT"
    },
    {
      title: "Full Stack Web Development By EduPi School",
      description: "Certification for completing the Full Stack Web Development Course.",
      image: EduPi ,
      link: "https://ibb.co/3mdF9Pyc"

    },
    {
      title: "Java (Basic) Certificate",
      description: "Certification for completing the Java (Basic).",
      image: JavaBa,
      link: "https://www.hackerrank.com/certificates/e8013fbe968e",
    },
    {
      title: "Selenium Webdriver",
      description: "Certification for completing the Selenium Webdriver.",
      image: Selenium,
      link: "https://www.udemy.com/certificate/UC-294d2e7e-17d3-4204-b22c-61b4654c61de/",
    },
    {
      title: "Software Testing Bootcamp",
      description: "Certification for Software Testing Bootcamp",
      image: softwaretesting,
      link: "https://www.udemy.com/certificate/UC-333aabf0-148f-45ec-a318-6d50b0d0caf3/",
    },
    {
      title: "JavaScript (Basic) Certificate",
      description:
        "Certification for completing JavaScript (Basic) Certificate.",
      image: JavascriptBascic,
      link: "https://www.hackerrank.com/certificates/00d1f90b0097",
    },
    {
      title: "Learn API Technical Writing: JSON and XML for Writers",
      description:
        "Certification for completing Learn API Technical Writing: JSON and XML for Writers.",
      image: api,
      link: "https://www.udemy.com/certificate/UC-4a8afc27-5eae-4f73-aa6e-c772518cca7c/",
    },
    {
      title: "SQL for Beginners: Learn SQL using MySQL and Database Design",
      description:
        "Certification for completing SQL for Beginners: Learn SQL using MySQL and Database Design.",
      image: Sql,
      link: "https://www.udemy.com/certificate/UC-5d069e0e-68de-43e1-9327-99bde914c322/",
    },
    {
      title: "Java Database Connection: JDBC and MySQL",
      description:
        "Certification for completing Java Database Connection: JDBC and MySQL.",
      image: JavaDatabase,
      link: "https://www.udemy.com/certificate/UC-07bc90b1-7057-4903-a7a7-453abc0c37a8/",
    },
    {
      title: "Master XPath and CSS Selectors for Selenium WebDriver",
      description:
        "Certification for completing Master XPath and CSS Selectors for Selenium WebDriver.",
      image: Xpath,
      link: "https://www.udemy.com/certificate/UC-39ca565d-f4f3-4c32-badf-a659ccb04c47/",
    },
    {
      title: "Relational Database Design",
      description: "Certification for completing Relational Database Design.",
      image: Database,
      link: "https://www.udemy.com/certificate/UC-fd9ba280-b8b1-4aec-a262-c1a1ca6bd296/",
    },
    {
      title: "Responsive Web Design",
      description: "Certification for completing Responsive Web Design.",
      image: Responsive,
      link: "https://www.freecodecamp.org/certification/fcc3d7993ae-9e82-4740-aa53-d42fa7c1ce34/responsive-web-design",
    },
    {
      title: "C Programming For Beginners",
      description: "Certification for completing C Programming For Beginners.",
      image: c,
      link: "https://www.udemy.com/certificate/UC-2a49d33e-13da-4763-a4c4-25b9d0707b32/",
    },
    {
      title: "Build Websites from Scratch with HTML & CSS",
      description:
        "Certification for completing Build Websites from Scratch with HTML & CSS.",
      image: htmlandcss,
      link: "https://www.udemy.com/certificate/UC-368646ef-1b9a-457d-b46b-f4b02f93467c/",
    },
    {
      title: "Accelerated JavaScript Training",
      description:
        "Certification for completing Accelerated JavaScript Training.",
      image: js,
      link: "https://www.udemy.com/certificate/UC-873f9124-0ea9-4d8b-8f20-9d50df87ed3f/",
    },
    {
      title: "Complete Flexbox Course: Master CSS3 Flexbox for Good",
      description:
        "Certification for completing Complete Flexbox Course: Master CSS3 Flexbox for Good.",
      image: flexbox,
      link: "https://www.udemy.com/certificate/UC-ec636250-4bef-425d-bc4e-5312ea21d84e/",
    },
    {
      title: "CSS (Basic) Certificate",
      description: "Certification for completing CSS (Basic).",
      image: CssBasic,
      link: "https://www.hackerrank.com/certificates/72a920214312",
    },
    {
      title: "SQL (Intermediate) Certificate",
      description: "Certification for completing SQL (Intermediate).",
      image: Sqlin,
      link: "https://www.hackerrank.com/certificates/EBA1CEC48C3C",
    },
    {
      title: "SQL (Basic) Certificate",
      description: "Certification for completing SQL (Basic).",
      image: Sqlba,
      link: "https://www.hackerrank.com/certificates/7280B303162D",
    },
    {
      title: "Python (Basic) Certificate",
      description: "Certification for completing Python (Basic).",
      image: Pythonba,
      link: "https://www.hackerrank.com/certificates/D07F50BF94FC",
    },
    {
      title: "Problem Solving (Basic) Certificate",
      description: "Certification for completing Problem Solving (Basic).",
      image: Problem,
      link: "https://www.hackerrank.com/certificates/24CD3F87A5DF",
    },
    {
      title: "Ethical Hacking & Bug Hunting: Buffer Overflow For Beginners",
      description:
        "Certification for completing Ethical Hacking & Bug Hunting: Buffer Overflow For Beginners.",
      image: Ethical,
      link: "https://www.udemy.com/certificate/UC-f27808f0-324b-47d3-a93a-88a3b93e126e/",
    },
    {
      title: "Full Stack E-commerce Project",
      description:
        "Certification for completing the Full Stack E-commerce Project.",
      image: fullStackE,
      link: "https://ibb.co/JWxtj2VT",
    },
    {
      title: "Full Stack Food Delivery Project",
      description:
        "Certification for completing the Full Stack Food Delivery Project.",
      image: foodDelivery,
      link: "https://ibb.co/0jjGLhrB",
    },
    {
      title: "React Hooks Crash Course",
      description: "Certification for completing React Hooks Crash Course.",
      image: reacthook,
      link: "https://ibb.co/S7r6bd6h",
    },
    {
      title: "Javascript Fundamentals",
      description: "Certification for completing Javascript Fundamentals",
      image: javascript,
      link: "https://ibb.co/39p7g49B",
    },
    {
      title: "Introduction to Postman API",
      description:"Certification for completing the course on Introduction to Postman API. ",
      image:Postman,
      link :"https://ibb.co/mCK9b3Vk"
    },
    {
      title: "Understand How to Ace Corporate Interviews",
      description:
        "Certification for completing the course on Understand How to Ace Corporate Interviews.",
      image: Ace,
      link: "https://pritiranjanpatra2.github.io/Certificates/Ace.html",
    },
    {
      title: "Be Prepared for Group Discussions",
      description:
        "Certification for completing the course on Be Prepared for Group Discussions.",
      image: Group,
      link: "https://pritiranjanpatra2.github.io/Certificates/Group.html",
    },
    {
      title: "Prepare a Strong Resume and Cover Letter",
      description:
        "Certification for completing the course on Prepare a Strong Resume and Cover Letter.",
      image: Resume,
      link: "https://pritiranjanpatra2.github.io/Certificates/Resume.html",
    },
    {
      title: "Develop Soft Skills that Industry Demands",
      description:
        "Certification for completing the course on Develop Soft Skills that Industry Demands.",
      image: Soft,
      link: "https://pritiranjanpatra2.github.io/Certificates/Soft.html",
    },{
      title: "Tata Crucible Campus Quiz 2024",
      description: "Certificate of Participation for Tata Crucible Campus Quiz 2024",
      image:Tata,
      link:"https://ibb.co/k2Sx0sBs"
    },
    {
      title: "Make Impactful Presentations",
      description:
        "Certification for completing the course on Make Impactful Presentations.",
      image: Presentations,
      link: "https://pritiranjanpatra2.github.io/Certificates/Presentations.html",
    },
    {
      title: "Nesly E-Learning 2025",
      description: " Certification for completing the Nesly E-Learning",
      image: nesly,
      link: "https://ibb.co/G3d0ZBmp",
    },
    {
      title: "1-Day AI Tools Workshop",
      description: "Certification for completing the 1-Day AI Tools Workshop.",
      image: chatgpt,
      link: "https://pritiranjanpatra2.github.io/Certificates/",
    },
  ];

  return (
    <div className="certificate-section">
      <h1>
        My <span className="highlight">Certificates</span>
      </h1>
      <p>
        These are my shiny digital trophies 🏆 earned by surviving online
        courses, late-night coding, and a lot of coffee ☕. Enjoy the scroll!
      </p>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <a
              href={cert.link}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
