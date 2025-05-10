import React from 'react';
import logo from './logo.svg'; // Import the logo from src
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src={logo} 
          alt="Tutor Connect Logo" 
          className="logo" 
        />
        <div className="title-group">
          <h1>TUTOR CONNECT</h1>
          <p className="tagline">Connecting students with the right tutors</p>
        </div>
      </div>
    </header>
  );
}

export default Header;