import React from 'react';
import './Certificate.css';
import JavascriptBascic from '../../Assets/cert.png'; 
import softwaretesting from '../../Assets/softwaretesting.png';
import Selenium from '../../Assets/cert2.png'; 
import api from '../../Assets/Api.png';
import c from '../../Assets/c.png';
import Database from '../../Assets/Database.png'
import flexbox from '../../Assets/flexbox.png';
import htmlandcss from '../../Assets/htmlandcss.png';
import Sql from '../../Assets/Sql.png';
import js from '../../Assets/js.png';
import JavaDatabase from '../../Assets/JavaDatabase.png';
import Responsive from '../../Assets/Responsive.png';
import Xpath from '../../Assets/Xpath.png';

import Sqlin from '../../Assets/Sql-in.png';
import Sqlba from '../../Assets/Sql-ba.png';
import Pythonba from '../../Assets/Python-Ba.png';
import JavaBa from '../../Assets/Java-Ba.png';
import Problem from '../../Assets/Problem.png';
import CssBasic from '../../Assets/CssBasic.png';




// import cert3 from '../../Assets/cert3.png'; 

function Certificate() {
  const certificates = [
    {
      title: 'Java (Basic) Certificate',
      description: 'Certification for completing the Java (Basic).',
      image: JavaBa,
      link: 'https://www.hackerrank.com/certificates/e8013fbe968e'
    },
   
    {
      title: 'Selenium Webdriver',
      description: 'Certification for completing the Selenium Webdriver.',
      image: Selenium,
      link: 'https://www.udemy.com/certificate/UC-294d2e7e-17d3-4204-b22c-61b4654c61de/'
    },
    {
      title: 'Software Testing Bootcamp',
      description: 'Certification for Software Testing Bootcamp',
      image: softwaretesting,
      link: 'https://www.udemy.com/certificate/UC-333aabf0-148f-45ec-a318-6d50b0d0caf3/'
    },
    {
      title: 'JavaScript (Basic) Certificate',
      description: 'Certification for completing JavaScript (Basic) Certificate.',
      image: JavascriptBascic,
      link: 'https://www.hackerrank.com/certificates/00d1f90b0097'
    }
    ,
    {
      title: 'Learn API Technical Writing: JSON and XML for Writers',
      description: 'Certification for completing Learn API Technical Writing: JSON and XML for Writers.',
      image: api,
      link: 'https://www.udemy.com/certificate/UC-4a8afc27-5eae-4f73-aa6e-c772518cca7c/'
    },
    {
      title: 'SQL for Beginners: Learn SQL using MySQL and Database Design',
      description: 'Certification for completing SQL for Beginners: Learn SQL using MySQL and Database Design.',
      image: Sql,
      link: 'https://www.udemy.com/certificate/UC-5d069e0e-68de-43e1-9327-99bde914c322/'
    },
    {
      title: 'Java Database Connection: JDBC and MySQL',
      description: 'Certification for completing Java Database Connection: JDBC and MySQL.',
      image: JavaDatabase,
      link: 'https://www.udemy.com/certificate/UC-07bc90b1-7057-4903-a7a7-453abc0c37a8/'
    },
    {
      title: 'Master XPath and CSS Selectors for Selenium WebDriver',
      description: 'Certification for completing Master XPath and CSS Selectors for Selenium WebDriver.',
      image: Xpath,
      link: 'https://www.udemy.com/certificate/UC-39ca565d-f4f3-4c32-badf-a659ccb04c47/'
    },
    {
      title: 'Relational Database Design',
      description: 'Certification for completing Relational Database Design.',
      image: Database,
      link: 'https://www.udemy.com/certificate/UC-fd9ba280-b8b1-4aec-a262-c1a1ca6bd296/'
    },
    {
      title: 'Responsive Web Design',
      description: 'Certification for completing Responsive Web Design.',
      image: Responsive,
      link: 'https://www.freecodecamp.org/certification/fcc3d7993ae-9e82-4740-aa53-d42fa7c1ce34/responsive-web-design'
    },
    {
      title: 'C Programming For Beginners',
      description: 'Certification for completing C Programming For Beginners.',
      image: c,
      link: 'https://www.udemy.com/certificate/UC-2a49d33e-13da-4763-a4c4-25b9d0707b32/'
    },
    {
      title: 'Build Websites from Scratch with HTML & CSS',
      description: 'Certification for completing Build Websites from Scratch with HTML & CSS.',
      image: htmlandcss,
      link: 'https://www.udemy.com/certificate/UC-368646ef-1b9a-457d-b46b-f4b02f93467c/'
    },
    {
      title: 'Accelerated JavaScript Training',
      description: 'Certification for completing Accelerated JavaScript Training.',
      image: js,
      link: 'https://www.udemy.com/certificate/UC-873f9124-0ea9-4d8b-8f20-9d50df87ed3f/'
    },
    {
      title: 'Complete Flexbox Course: Master CSS3 Flexbox for Good',
      description: 'Certification for completing Complete Flexbox Course: Master CSS3 Flexbox for Good.',
      image: flexbox,
      link: 'https://www.udemy.com/certificate/UC-ec636250-4bef-425d-bc4e-5312ea21d84e/'
    },
    {
      title: 'CSS (Basic) Certificate',
      description: 'Certification for completing CSS (Basic).',
      image: CssBasic,
      link: 'https://www.hackerrank.com/certificates/72a920214312'
    },
    {
      title: 'SQL (Intermediate) Certificate',
      description: 'Certification for completing SQL (Intermediate).',
      image: Sqlin,
      link: 'https://www.hackerrank.com/certificates/EBA1CEC48C3C'
    },
    {
      title: 'SQL (Basic) Certificate',
      description: 'Certification for completing SQL (Basic).',
      image: Sqlba  ,
      link: 'https://www.hackerrank.com/certificates/7280B303162D'
    },
    {
      title: 'Python (Basic) Certificate',
      description: 'Certification for completing Python (Basic).',
      image: Pythonba,
      link: 'https://www.hackerrank.com/certificates/D07F50BF94FC'
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      description: 'Certification for completing Problem Solving (Basic).',
      image: Problem,
      link: 'https://www.hackerrank.com/certificates/24CD3F87A5DF'
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
