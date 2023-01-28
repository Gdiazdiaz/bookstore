import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="main-container">
        <h1 className="navbar-logo">BookStore CMS</h1>
        <ul className="item-container">
          <li><Link to="/" className="item" activeClassName="active-link">BOOKS</Link></li>
          <li><Link to="/Categories" className="item" activeClassName="active-link">CATEGORIES</Link></li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon" viewBox="0 0 16 16">
        {' '}
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        {' '}
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        {' '}
      </svg>
    </div>
  );
}

export default Navbar;
