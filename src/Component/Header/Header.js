import React from 'react';
import './Header.css';
import logo from './webcad_logo.png';  // Import the logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="WebCAD Logo" />
      </div>
      <nav>
        <a href="#about-us">About Us</a>
        <a href="#help">Help</a>
      </nav>
    </header>
  );
};

export default Header;
