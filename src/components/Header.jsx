import React from 'react';
import './Style/Header.css';  

const Header = () => {
  const eagle = 'https://seeklogo.com/images/H/hawk-logo-1024EF22B9-seeklogo.com.png'
  return (
    <header className="header-container">
      <img src={eagle} alt="Logo" className="logo" />

      <nav className="nav-menu">
        <a href="/">Home</a>

        <div className="dropdown-container">
          <button className="dropdown-button">About ErrandBuddy</button>
          <div className="dropdown-content">
            <a href="/mission">Mission</a>
            <a href="/vision">Owners</a>
          </div>
        </div>

        {/* <a href="/agric-lands">Agric Lands</a> */}

        <div className="dropdown-container">
          <button className="dropdown-button">Connect</button>
          <div className="dropdown-content">
            <a href="/register">Register as an Admin</a>
            <a href="/register2">Register as a User</a>
            <a href="/register3">Register as a Buddy</a>
            <a href="/login">Login</a>
          </div>
        </div>

        <a href="/services-link" className="our services link">Service Link</a>
      </nav>

      <button className="enquiry-button">ENQUIRIES</button>
    </header>
  );
};

export default Header;
