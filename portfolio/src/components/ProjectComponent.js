import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/index.css";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Project({ title, image, deployedLink, github }) {
  return (
    <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image} />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href={deployedLink} target="_blank" variant="primary">See Project</Button>
            <Button href={github} target="_blank" variant="secondary">See Github</Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default Project;
