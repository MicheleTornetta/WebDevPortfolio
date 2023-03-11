import React from "react";
import "../../styles/main.scss";
import "../../styles/cardStyle.css";
import { Row, Col, Form } from 'react-bootstrap';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

export default function Contact(props) {
  return (
    <Form>
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
// };
