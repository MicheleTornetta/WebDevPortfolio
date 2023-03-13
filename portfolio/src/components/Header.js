import React from "react";

// Here we are importing a CSS file
import "../styles/HeaderStyle.css";
// import "../styles/main.scss";
// import Divider from "../images/cherrybg.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h1>Michele Tornetta - Web Developer</h1>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
