import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MyResume from "./MyResume.pdf";

export default function Resume() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3 className="skills">Web Development & Creatives</h3>
            <p> Website | SEO | HTML | CSS | JavaScript | APIs | Adobe Photo Shop | InDesign | Virtual Studio | Heroku | GitHub | Mongo | Node.js | MySQL | Express | Mongo				
            </p>
            <p>
            Digital - Email | Social Media | Database Segmentation | Promotion Development/Implementation	|	Graphic Design - Banners | Posters | Copywriting | Research | Surveys 				
            </p>
          <h3>Director of Marketing</h3>
            <p>Mass marketing/segmentation, promotion development and implementation, graphics, copywriting, budgeting, etc.</p>
          <h3>Email Marketing Manager</h3>
            <p>Individual customer responses and development of an online marketing presence.</p>
        </Col>
      </Row>
      <Row>
        <a href={ MyResume } download className='resume'>Click to download my Resume</a>
      </Row>
    </Container>
  );
}
