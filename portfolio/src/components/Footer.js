import React from "react";
import "../styles/FooterStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

<div>
    
</div>
function Footer() {
  return (
    <div className="bottom">
    <Container >
        <Row>
            <Col>Michele Tornetta
                <p>Web Developer</p>
            </Col>
            <Col className="widerFooter" xs={6}>
                <p></p>
                <a href="https://github.com/MicheleTornetta">GitHub</a></Col>
            <Col className="rightFooter">
                <p></p>
                <a href="https://www.linkedin.com/in/micheletornetta/">LinkedIn</a></Col>
        </Row>
    </Container>
    </div>  

  );
}
export default Footer;
