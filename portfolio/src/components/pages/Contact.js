import React from "react";
import "../../styles/main.scss";
import "../../styles/contactStyle.css";
// import "../../styles/cardStyle.css";
import { Row, Col, Form } from 'react-bootstrap';
// import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const emailConfig = {
  serviceID: "service_09za52g",
  publicKey: "JVVhyrkfpsXGXIzn4",
  templateID: "template_ftlinjd"
};

export default function Contact(props) {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e);

    // e.target is the form element
    emailjs.sendForm(emailConfig.serviceID, emailConfig.templateID, e.target, emailConfig.publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form onSubmit={sendEmail}>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control placeholder="First Name" required />
        </Col>
        <Col>
          <Form.Control placeholder="Last Name" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control placeholder="Company Name" />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control
            type="email"
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            placeholder="Email"
            required
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control placeholder="Subject" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control className="message" placeholder="Message" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control variant="primary" type="submit" className="btnct" value="Send" />
        </Col>
      </Row>

    </Form>
  );
};



