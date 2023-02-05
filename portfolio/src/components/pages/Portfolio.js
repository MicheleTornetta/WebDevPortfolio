import React from "react";
import Project from "../ProjectComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Portfolio() {
  return (
    <div>
      

      <h2>My projects</h2>
      <Container>
        <Row className="projects">
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Horiseon"
              image="./images/horiseon.jpg"
              deployedLink="https://micheletornetta.github.io/code_refractor/"
              github="https://github.com/MicheleTornetta/portfolio"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Password Generator"
              image="./images/PW_Generator1.jpg"
              text="dddddd"
              deployedLink="https://micheletornetta.github.io/password-generator/"
              github="https://github.com/MicheleTornetta/password-generator"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="WebDevPortolio"
              image="image.png"
              deployedLink="https://www.google.com/"
              github="https://www.github.com/MicheleTornetta/"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Project
              title="WebDevPortolio"
              image="iamge.png"
              deployedLink="https://www.google.com/"
              github="https://www.github.com/MicheleTornetta/"
            />
          </Col>
          <Col sm={8}>
            <Project
              title="WebDevPortolio"
              image="iamge.png"
              deployedLink="https://www.google.com/"
              github="https://www.github.com/MicheleTornetta/"
            />
          </Col>
          <Col sm={8}>
            <Project
              title="WebDevPortolio"
              image="iamge.png"
              deployedLink="https://www.google.com/"
              github="https://www.github.com/MicheleTornetta/"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
