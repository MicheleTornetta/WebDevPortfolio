import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavbarStyle.css";

function NavigationMenu({ currentSection, handleSectionChange }) {
  return (
    <Navbar bg="light" expand="md">
      <Container style={{zIndex: 999, backgroundColor: 'white'}}>
        <Navbar.Brand href="#home">
          <img
            className="navbar-brand"
            alt="Icon"
            src="/images/gradient.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

          <Nav className="me-auto">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is 'Home'
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentSection === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </Link>
            <Link
              to="/portfolio"
              // Check to see if the currentSection is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentSection === "Portfolio"
                  ? "nav-link active"
                  : "nav-link"
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
