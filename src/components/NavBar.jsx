import React, { useState } from 'react';
import logo from '../assets/download.png';
const NavBar = () => {
  const [listNav] = useState(['home', 'skills', 'projects', 'contacts']);

  const changeTab = ()=>{
    
  }
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
      <nav>
        {
          listNav.map((value, index) => (
            <span key={index}
            className='active'>{value}</span>
          ))
        }
      </nav>
    </header>
  );
}

export default NavBar;
