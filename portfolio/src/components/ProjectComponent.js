import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import '../styles/main.scss';

//creating a function to be exported to the Project Component 
function Project({ title, image, text, deployedLink, github }) {
  return (
    <Card ClassName="card" style={{ width: "18rem", margin: 'auto', marginBottom: "20px", height: "400px" }}>
      <Card.Body>
        <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
          <div style={{flex: 1}}>
            <Card.Title>{title}</Card.Title>
            <Card.Img as={Image} variant="top" src={image} fluid={true} alt="Project Image"/> 
            <Card.Text>{text}</Card.Text>
          </div>
          <div>
            <Button className="btn" href={deployedLink} target="_blank" variant="primary">See Project</Button>
            <Button href={github} target="_blank" variant="secondary">See Github</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
