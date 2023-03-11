import React from "react";
import "../styles/FooterStyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="bottom">
    <Container className="bottom">
        <Row>
            <Col className="leftFooter" xs={6}>Michele Tornetta - Web Developer
            </Col>
            <Col className="rightFooter">
                <p></p>
                <a href="https://github.com/MicheleTornetta">GitHub</a></Col>
            <Col className="rightFooter">
                <p></p>
                <a href="https://www.linkedin.com/in/micheletornetta/">LinkedIn</a></Col>
            <Col className="rightFooter">
                <p></p>
                <a href="https://www.facebook.com/michele.tornetta">FaceBook</a></Col>
        </Row>
    </Container>
    </div>  

  );
}
export default Footer;
