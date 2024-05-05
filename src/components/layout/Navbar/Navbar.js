import React from 'react';
import { ReactComponent as CompanyLogo } from '../../assets/svg/logoipsum.svg';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="logo" > Wave </h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li className="dropdown">
          <a href="#">Products</a>
          <div className="dropdown-content">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
            <a href="#">Product 4</a>
          </div>
        </li>
      </ul>
      <div className="user-actions">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
