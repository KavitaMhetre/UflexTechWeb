// Header.js
import React from 'react';
import '../style.css'; // Make sure to import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="title">Uflex Technologies</div>
        <div className="menu">
          <a href="#" className="hover:underline">Let's Talk</a>
          <button className="menu-button">
            Menu
          </button>
        </div>
      </div>
      <h1 className="main-heading">
        Take Your Brand To New Heights With Our Digital Development Expertise
      </h1>
      
      <p className="subtext">
        From high-speed internet and comfortable workstations to meeting rooms and events that foster connections, we've thought of
        everything to make your work experience exceptional.
      </p>
      <button className="talk-button">
        Let's Talk
      </button>
      
    </header>
  );
};

export default Header;
