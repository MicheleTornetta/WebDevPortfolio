import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portrait from '../../images/mtbluebrdr.png';

export default function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={2} >
        {/* xs={12} md={8} lg={2} */}
          <img src={Portrait} 
                className="profilepic"
                alt="Michele Tornetta"
          />
        </Col>
      <Col xs={12} md={8} lg={2} >  
        <h1>About Me</h1>
        <p>
          Type something about myself...
        </p>
      </Col>
      </Row>
    </Container>
  );
}
