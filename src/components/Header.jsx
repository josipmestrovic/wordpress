// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked (especially on mobile)
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Branding / Logo */}
        <div className="logo">
          <img
            src="/images/josip.mestrovic.jpg"
            alt="Josip Meštrović"
            className="logo-img"
          />
          <span className="logo-text">Josip Meštrović</span>
        </div>

        {/* Navigation Toggle for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#home" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
