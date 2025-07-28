import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/download.png';
import { GlobalContext } from '../context/GlobalContext';

const NavBar = () => {

  const { language, changeLanguage, translation } = useContext(GlobalContext);

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  }

  const [activeTab, setActiveTab] = useState('home');
  const listNav = ['home', 'skills', 'projects', 'contacts'];

  const handleClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = listNav.map(id => {
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
        style={{border:"none",outline: "none",
  background: "transparent", backgroundColor:"#010824"}}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
      </div>
      <nav>
        {listNav.map((item) => (
          <span
            key={item}
            onClick={() => handleClick(item)}
            className={activeTab === item ? 'active' : ''}
          >
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
