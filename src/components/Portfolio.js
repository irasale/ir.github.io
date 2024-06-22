import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.scss';

const Portfolio = ({ darkMode }) => {
  return (
    <motion.section id="portfolio" className={`portfolio-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="profile">
          <h1>Ishan Rasale</h1>
          <p className="description">Enthusiastic and driven high school student with an exemplary work ethic and experience.</p>
          <p><strong>Alliance Academy 10th Grade</strong></p>
          <p><strong>Phone:</strong> (470) 380-5686</p>
          <p><strong>Email:</strong> rasaleishan@gmail.com</p>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="content">
            <div className="job">
              <h3 className='comp'>Robotics Competitor</h3>
              <p>Achieved success in VEX IQ competitions, progressing to the state level in 6th grade and securing multiple awards, showcasing dedication and skill.</p>
              <p>Attained 3rd place in the VEX IQ World Championships division during 8th grade, emphasizing adaptability and high-performance capabilities.</p>
              <p>Transitioned to FTC in 9th grade, gaining valuable experience with metal components and demonstrating versatility in robotics platforms.</p>
              <p>Currently engaged in VEX V5, reaching the quarter-finals in the first competition, showcasing continued commitment, collaborative skills, and a problem-solving approach within a team setting.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Volunteering</h2>
          <div className="content">
            <div className="job">
              <h3 className='cont'>Contributor</h3>
              <p>Conducted online tutoring for elementary and middle school students through SEWA Americorps, tailoring approaches to individual learning styles.</p>
              <p>Created personalized cards as tokens of appreciation for the dedicated healthcare professionals at Northside Hospital.</p>
              <p>Provided guidance to elementary students in robotics (VEX IQ).</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Education</h2>
          <div className="content">
            <p><strong>Alliance Academy for Innovation, Cumming, Georgia— High School</strong></p>
            <p>August 2022 - Present</p>
            <p>10th grade student</p>
            <p><strong>Extracurriculars:</strong> Chess Club, Future Business Leaders of America (FBLA), SEWA, Robotics (VEX V5), Debate Club, FinTech Club, and Coding Club.</p>
          </div>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <div className="content">
            <ul>
              <li>Scratch</li>
              <li>Python</li>
              <li>Robotics (VEX IQ, FTC, V5)</li>
              <li>Java</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Awards</h2>
          <div className="content">
            <p><strong>VEX IQ</strong></p>
            <ul>
              <li>10+ local awards: Teamwork Champion, Skills Champion, Programming Award, Excellence Award, and Think Award.</li>
              <li>2 state awards: Teamwork Champion and Think Award.</li>
              <li>1 worlds award: Teamwork 3rd Place.</li>
            </ul>
            <p><strong>Tech Fair</strong></p>
            <ul>
              <li>2nd Place Computer Game Design.</li>
            </ul>
            <p><strong>Certifications:</strong> SOLIDWORKS Mechanical Design Certification.</p>
          </div>
        </div>

        <div className="section">
          <h2>Languages</h2>
          <div className="content">
            <ul>
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Portfolio;
