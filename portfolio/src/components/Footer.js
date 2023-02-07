import React from "react";
import "../styles/FooterStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="bottom">
    <Container className="bottom">
        <Row>
            <Col className="leftFooter" xs={6}>Michele Tornetta
                <p>Web Developer</p>
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
