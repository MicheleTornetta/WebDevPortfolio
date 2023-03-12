import React from "react";
import "../styles/FooterStyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="bottom">
      <Container className="bottom">
        <Row>
          <Col className="leftFooter" xs={6}>
            Michele Tornetta - Web Developer
          </Col>
          <Col className="rightFooter">
            <a
              href="https://github.com/MicheleTornetta"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Col>
          <Col className="rightFooter">
            <a
              href="https://www.linkedin.com/in/micheletornetta/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
