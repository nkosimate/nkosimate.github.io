import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';  // External CSS file for styles

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Nkosinathi Mate: Graduate Data Scientist & Software Engineer</h1>  {/* Replace with your name or logo */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
