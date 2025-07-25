import React, { useState, useEffect } from 'react';
import logo from '../assets/download.png';

const NavBar = () => {
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
        <img src={logo} alt="logo" />
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
