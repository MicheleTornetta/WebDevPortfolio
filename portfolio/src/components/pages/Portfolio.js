import React from "react";
import Project from "../ProjectComponent";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/cardStyle.css";
import "../../styles/main.scss";

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
              text="Focusing on inbound strategies for lead generation."
              deployedLink="https://micheletornetta.github.io/code_refractor/"
              github="https://github.com/MicheleTornetta/code_refractor"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Password Generator"
              image="./images/PW_Generator1.jpg"
              text="A password that is very secure by generating random letters."
              deployedLink="https://micheletornetta.github.io/password-generator/"
              github="https://github.com/MicheleTornetta/password-generator"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Web Coding Assessment"
              image="./images/codingquiz.png"
              text="Try to answer the coding quiz questions correctly while beating the clock."
              deployedLink="https://MicheleTornetta.github.io/coding-quiz/"
              github="https://github.com/MicheleTornetta/coding-quiz"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Work Day Scheduler"
              image="./images/wdspic.png"
              text="Use the Work Day Scheduler to plan out your day."
              deployedLink="https://micheletornetta.github.io/work-day-scheduler/"
              github="https://github.com/MicheleTornetta/work-day-scheduler"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Weather Dashboard"
              image="./images/dashboardPicture.png"
              text="The Weather Dashboard provides you with your 5 day weather forecast."
              deployedLink="https://micheletornetta.github.io/weather-dashboard/"
              github="https://github.com/MicheleTornetta/weather-dashboard"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Brews & Chews"
              image="./images/brewsnchewspic.png"
              text="Brews & Chews is a website designed with both the extrovert and introvert in mind." 
              deployedLink="https://anthony-furjanic.github.io/brewsandchews/"
              github="https://github.com/Anthony-Furjanic/brewsandchews"
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Project
              title="Grrrr'inder"
              image="./images/grrrrinder2.png"
              text="Grrrr'inder is an alternative to traditional dog parks." 
              deployedLink="https://grrrrinder2.herokuapp.com/"
              github="https://github.com/SamanthaJaneDavidson/grrrrinder2"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
