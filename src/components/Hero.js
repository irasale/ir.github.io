// Hero.js

import React, { useState, useEffect } from 'react';
import './Hero.scss';

const Hero = ({ darkMode, toggleDarkMode }) => {
  const [typedName, setTypedName] = useState('');
  const name = "Ishan Rasale"; // Replace with your name

  // Effect to type the name on load
  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 100; // Adjust typing speed (milliseconds per character)

    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setTypedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingDelay);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [name]);

  // Scroll animation logic
  useEffect(() => {
    const handleScroll = () => {
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        const topPosition = heroContent.getBoundingClientRect().top;
        const scrollPosition = window.innerHeight / 1.3; // Adjust trigger point

        if (topPosition < scrollPosition) {
          heroContent.classList.add('animate__fadeInUp');
        } else {
          heroContent.classList.remove('animate__fadeInUp');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className={`hero ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className={`hero-content animate__animated ${typedName && 'animate__fadeInUp'}`}>
          <h1 className={darkMode ? 'white-text' : ''}>{typedName}</h1>
          <p>Student ~ Passion for coding</p>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">{darkMode ? '' : ''}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
