import React from 'react';
import './More.css'
function More() {
  return (
    <div>
      <div className="more-section">
        <div className="card achievements">
          <h2>Achievements</h2>
          <ul>
            <li>
              Achieved a prestigious 4-star ranking on HackerRank for exemplary problem-solving skills in Java and MySQL.{' '}
              <a href="HackerRank Profile URL">View HackerRank Profile</a>
            </li>
            <li>
              Successfully tackled over 170 challenging problems on LeetCode, demonstrating proficiency in algorithmic problem-solving.{' '}
              <a href="LeetCode Profile URL">View LeetCode Profile</a>
            </li>
            <li>
              Completed a rigorous 50-day coding challenge on LeetCode, maintaining an impressive 75-day maximum streak, showcasing dedication and consistency in honing coding skills.{' '}
              <a href="LeetCode Profile URL">View LeetCode Profile</a>
            </li>
          </ul>
        </div>
        <div className="card education">
          <h2>Education</h2>
          <p>
            <strong>Master of Computer Applications</strong>, Utkal University (2022 - 2024)
          </p>
          <p>
            <strong>Bachelor of Computer Applications</strong>, Utkal University (2019 - 2022)
          </p>
        </div>
        <div className="card hobbies">
          <h2>Hobbies and Interests</h2>
          <p>
            I enjoy hiking, playing the guitar, and exploring new technologies. When I'm not coding, you can find me reading books on technology and innovation, or experimenting with new programming languages and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;
