import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar() {
  return (
    <div className="header">
      <h2 className="nav-logo">
        Maya-fix
      </h2>
      <nav className="nav">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="about">
            About
          </Link>
        </li>
        <li>
          <Link to="contact">
            Contact
          </Link>
        </li>
      </nav>
    </div>

  );
}

export default Navbar;
