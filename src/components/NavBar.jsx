import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/download.png';
import { GlobalContext } from '../context/GlobalContext';

const NavBar = () => {

  const { language, changeLanguage, translation } = useContext(GlobalContext);

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  }

  const [activeTab, setActiveTab] = useState('home');
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

      const closest = offsets.reduce((prev, curr) => {
        return Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev;
      });

      setActiveTab(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className="logo">
        <select value={language} onChange={handleChange}
          style={{
            border: "none", outline: "none",
            background: "transparent", backgroundColor: "#010824"
          }}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
      </div>
      <nav>
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
