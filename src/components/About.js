import React from 'react';
import './About.scss';

const AboutMe = ({ darkMode }) => {
  return (
    <section id="about" className={`about-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h1>About Me</h1>
        <p>Hello! I'm Ishan!</p>
        <p>
          I’m a rising 11th grader at Alliance Academy for Innovation, with a passion for learning and personal growth. I thrive on challenges and enjoy developing new skills, particularly in areas that require strategic thinking and problem-solving.
        </p>
        
        <h2>My Interests and Hobbies</h2>
        <ul>
          <li><strong>Chess:</strong> I love the strategic depth of chess. It has taught me patience, foresight, and the importance of thinking several steps ahead.</li>
          <li><strong>Rubik's Cube:</strong> Solving Rubik's Cubes is a hobby of mine. I enjoy the process of figuring out the algorithms and improving my solve times. It’s a fun way to keep my mind sharp and engaged.</li>
        </ul>
        
        <h2>Coding Skills</h2>
        <p>I have developed a strong foundation in coding, working with several languages and frameworks:</p>
        <ul>
          <li>React</li>
          <li>JavaScript (JS)</li>
          <li>Java</li>
          <li>CSS</li>
          <li>Python</li>
        </ul>
        <p>I enjoy building web applications and exploring new technologies to enhance my coding skills. This website was built with React, using Javascript and SCSS!</p>
        
        <h2>Academic and Personal Goals</h2>
        <p>
          As I move into 11th grade, I aim to excel in my studies and continue developing my skills. I am particularly interested in STEM subjects and am exploring potential career paths in technology and engineering. My goal is to make the most of my high school experience by participating in extracurricular activities, taking on leadership roles, and preparing for college. I am in the Mechatronics and Computer Science pathways.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
