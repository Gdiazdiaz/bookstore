import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="navbar-logo">BookStore</h1>
      <ul className="item-container">
        <li><Link to="/" className="item">Books</Link></li>
        <li><Link to="/Categories" className="item">Categories</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
