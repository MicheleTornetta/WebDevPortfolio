import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarStyle.css';

function Navbar({ currentSection, handleSectionChange }) {
  return (
<nav className='navbar navbar-expand-lg'>
  <a className='navbar-brand' href='#gradient.png'>Icon</a>
  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
    <span className='navbar-toggler-icon'></span>
  </button>

  <div className='collapse navbar-collapse' id='navbarSupportedContent'>
  <ul className='navbar-nav mx-5'>
      <li className='nav-item++'>
        <Link
          to='/'
          // This is a conditional (ternary) operator that checks to see if the current page is 'Home'
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
        >About Me</Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/portfolio'
          // Check to see if the currentSection is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >Portfolio</Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/contact'
          // Check to see if the currentSection is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
        >Contact Me</Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/resume'
          // Check to see if the currentSection is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
        >Resume</Link>
      </li>
      </ul>
  </div>
</nav>
  );
}

export default Navbar;