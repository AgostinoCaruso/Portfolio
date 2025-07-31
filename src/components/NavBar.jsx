import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const { language, changeLanguage, translation, changeTheme, themeDark } = useContext(GlobalContext);
  const handleChange = (e) => changeLanguage(e.target.value);

  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listNavEffect = ["home", "skills", "projects", "contacts"];
  const listNav = [
    { id: 'home', label: translation[language].navbar.home || 'home' },
    { id: 'skills', label: translation[language].navbar.skills || 'skills' },
    { id: 'projects', label: translation[language].navbar.projects },
    { id: 'contacts', label: translation[language].navbar.contacts }
  ];

  const handleClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(section);
    setIsMenuOpen(false); // chiude il menu su mobile
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = listNavEffect.map(id => {
        const el = document.getElementById(id);
        return {
          id,
          offset: el ? el.getBoundingClientRect().top : Infinity
        };
      });
      const closest = offsets.reduce((prev, curr) =>
        Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
      );
      setActiveTab(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className="logo">
        <select className={`languageSelect ${themeDark ? 'light-theme-a':'dark-theme-a'}`} value={language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        {/* <div className={`theme ${themeDark ? 'light-theme-icon' : 'dark-theme-icon'}`}>
          <button onClick={changeTheme}>{themeDark ? 
            <FontAwesomeIcon icon={faSun} />
            : <FontAwesomeIcon icon={faMoon}/>}</button>
        </div> */}
      </div>

      <div
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {listNav.map(({ id, label }) => (
          <span
            key={id}
            onClick={() => handleClick(id)}
            className={activeTab === id ? 'active' : ''}
          >
            {label}
          </span>
        ))}
      </nav>

    </header>
  );
};

export default NavBar;
