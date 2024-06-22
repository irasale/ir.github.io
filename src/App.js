// App.js

import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={isDarkMode} />
      <main>
        <Hero darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={isDarkMode} />
        <Portfolio darkMode={isDarkMode} />
        
        <Contact darkMode={isDarkMode} />
        <Footer darkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
