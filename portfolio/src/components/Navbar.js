import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavbarStyle.css";
import "../styles/index.css";

function NavigationMenu({ currentSection }) {
  return (
    <Navbar expand="md">
      <Container style={{ zIndex: 999 }}>
        <Navbar.Brand href="#about">
          <img
            className="navbar-brand"
            alt="Icon"
            src="../images/gradient.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link ClassName="nav-item"
              to="/" 
              // This is a conditional (ternary) operator that checks to see if the current page is 'Home'
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentSection === "About" ? "nav-link active" : "nav-link"
              }>
                Home</Link>
            <Link
              to="/portfolio"
              // Check to see if the currentSection is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentSection === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/contact" 
              // Check to see if the currentSection is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentSection === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </Link>
            <Link
              to="/resume"
              // Check to see if the currentSection is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentSection === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;
