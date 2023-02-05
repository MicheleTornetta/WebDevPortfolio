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
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="WebDevPortolio"
              image="image.png"
              deployedLink="https://www.google.com/"
              github="https://www.github.com/MicheleTornetta/"
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
