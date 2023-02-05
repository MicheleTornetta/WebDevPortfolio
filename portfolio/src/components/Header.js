import React from 'react';
// Here we are importing a CSS file 
import '../styles/HeaderStyle.css';
import background from '../images/mountain.jpg'
import Logo from '../images/GLWDLogo.png'


function Header() {
  return (
    <header className="header" style={{ background: `url(${background})`,
    marginTop:'0px',
    height: '200px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
    <div className="container">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8">
            <h1>Michele Tornetta</h1>
            <h1>Portfolio</h1>
        </div>
        <div className="col-2">
          <img className="logo" src={Logo} 
                alt="GoLive WebDev Logo"
          />
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;