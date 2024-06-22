import React, { useState, useEffect } from 'react';
import './Header.scss'; // Import header styles

const Header = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`apple-header ${isScrolled ? 'small' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="apple-container">
        <nav className="apple-nav">
          <ul className="apple-nav-links">
            <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={darkMode ? 'dark-mode' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={darkMode ? 'dark-mode' : ''}>About</a></li>
            <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className={darkMode ? 'dark-mode' : ''}>Portfolio</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className={darkMode ? 'dark-mode' : ''}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
