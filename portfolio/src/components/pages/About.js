import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import Portrait from '../../images/mtbluebrdr.png';
import "../../styles/main.scss";
import "../../styles/aboutStyle.css";

export default function About() {
  return (
    <div>
    <Container className="container">
      <Row className="row">
        <Col lg={2} style={{textAlign: 'center'}}>
          <img src={Portrait} 
                className="profilepic"
                alt="Michele Tornetta"
          />
        </Col>
        <Col lg={10}>  
          <h1>About Me</h1>
            <p>
            My passion for web development and coding began when working as a Marketing Director.  It was important write and style html for specific hospital systems and their branding guidelines to include colors, fonts and even image placement.  
            </p>
            <p>
            For years I thought Web Development was nothing but a dream.  As a single mom, going back to college to learn coding just wasn't practicle. Then I was intruduced to the Uninversity of Pennsylvania Full Stack Web Dev Bootcamp, giving me the opportunity to pursue my passion.
            </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
