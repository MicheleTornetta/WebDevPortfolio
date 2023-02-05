import React from 'react';
// Here we are importing a CSS file 
import '../styles/HeaderStyle.css';
import '../styles/index.css';
import background from '../images/mountain.jpg'


function Header() {
  return (
    <header className="header" style={{ background: `url(${background})`,
    marginTop:'0px',
    height: '200px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <h1>Michele Tornetta</h1>
      <h1>Portfolio</h1>
    </header>
  );
}

export default Header;