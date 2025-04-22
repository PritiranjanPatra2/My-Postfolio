import React from 'react';
import './More.css';

function More() {
  return (
    <div>
      <div className="more-section">
        <div className="card achievements">
          <h2>🏆 Achievements</h2>
          <ul>
            <li>
              I got a shiny 4-star badge on HackerRank just for being really good at talking to computers in Java and MySQL! 🚀{' '}
              <a href="https://www.hackerrank.com/profile/patrapritiranja1">See how cool I am 😎</a>
            </li>
            <li>
              Solved 170+ brain-twisting puzzles on LeetCode – basically, I argue with algorithms for fun. 🤓{' '}
              <a href="https://leetcode.com/u/patrapritiranjan11/">Stalk my LeetCode</a>
            </li>
            <li>
              Did a 50-day coding marathon on LeetCode and didn't give up! My longest streak? 75 days. Even Netflix didn’t get that much loyalty. 💪{' '}
              <a href="https://leetcode.com/u/patrapritiranjan11/">Proof here 📈</a>
            </li>
          </ul>
        </div>

        <div className="card education">
          <h2>🎓 Education</h2>
          <p>
            <strong>Master of Computer Applications</strong> – Utkal University (2022 - 2024)<br />
            Where I learned to break (and sometimes fix) code like a pro.
          </p>
          <p>
            <strong>Bachelor of Computer Applications</strong> – Utkal University (2019 - 2022)<br />
            Where I first fell into the rabbit hole called programming.
          </p>
        </div>

        <div className="card hobbies">
  <h2>💻 Coding is My Hobby</h2>
  <p>
    I don’t just code for work — I code for fun too! I build random projects, break them, fix them, then break them again (it's part of the process 😅).
  </p>
  <p>
    I enjoy exploring new frameworks, learning weird bugs, and talking to my rubber duck when I get stuck. If you see me laughing at my screen, don’t worry — it's probably a coding meme.
  </p>
  <p>
    Trying out new tech stacks, building cool UI, solving tricky bugs — that’s my idea of a good time!
  </p>
</div>

      </div>
    </div>
  );
}

export default More;
