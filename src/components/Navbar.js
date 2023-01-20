import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar-container">
            <h1>BookStore</h1>
            <ul>
                <li><Link to="/" className="item">Books</Link></li>
                <li><Link to="/Categories" className="item">Categories</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;