import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import '../styles/main.scss';

//creating a function to be exported to the Project Component 
function Project({ title, image, text, deployedLink, github }) {
  return (
    <Card ClassName="card" style={{ width: "18rem", marginBottom: "20px", height: "350px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img as={Image} variant="top" src={image} fluid={true} alt="Project Image"/> 
        <Card.Text>{text}</Card.Text>
        <Button className="btn" href={deployedLink} target="_blank" variant="primary">See Project</Button>
        <Button href={github} target="_blank" variant="secondary">See Github</Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
