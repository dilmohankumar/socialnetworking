import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Brand</a>
        <div className="menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
          <Link to="/service">  <a className="nav-links">Services</a></Link>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
