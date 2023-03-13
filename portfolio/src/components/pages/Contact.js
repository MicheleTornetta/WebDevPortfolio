import React from "react";
import "../../styles/main.scss";
import "../../styles/contactStyle.css";
// import "../../styles/cardStyle.css";
import { Row, Col, Form } from 'react-bootstrap';
// import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const emailConfig = {
  serviceID: "service_09za52g",
  publicKey: "JVVhyrkfpsXGXIzn4",
  templateID: "template_ftlinjd"
};

export default function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    // e.target is the form element
    emailjs.sendForm(emailConfig.serviceID, emailConfig.templateID, e.target, emailConfig.publicKey)
      .then(() => {
        for (const formElement of document.getElementsByClassName('form-control')) {
          if (formElement.type !== 'submit') {
            formElement.value = '';
          }
        }

        confirmAlert({
          title: 'Email Sent!',
          message: 'You should receive a confirmation email shortly.',
          buttons: [
            {
              label: 'Awesome 🤙',
              onClick: () => {}
            }
          ]
        });
      }, (error) => {
        confirmAlert({
          title: 'Failed to send email!',
          message: `Something went wrong... ${error}.`,
          buttons: [
            {
              label: 'Darn',
              onClick: () => {}
            }
          ]
        });
      });
  };

  return (
    <Form onSubmit={sendEmail} style={{marginLeft: "20%", marginRight: "20%"}}>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control name="FirstName" placeholder="First Name" required />
        </Col>
        <Col>
          <Form.Control name="LastName" placeholder="Last Name" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control name="Company" placeholder="Company Name" />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control
            type="email"
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            placeholder="Email"
            name="Email"
            required
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control placeholder="Subject" name="Subject" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col>
          <Form.Control className="message" as="textarea" rows="3" name="Message" placeholder="Message" required />
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col xs={12}>
          <Form.Control variant="primary" type="submit" className="btnct" value="Send" />
        </Col>
      </Row>
    </Form>
  );
};
