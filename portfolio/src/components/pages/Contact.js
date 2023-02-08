import React from 'react';
import "../../styles/main.scss";
import "../../styles/cardStyle.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


export default function Contact() {
  return (
    <Form>
      <Row style={{width: "100%"}}>
        <Col>
          <Form.Control placeholder="First name" required/>
        </Col>
        <Col>
          <Form.Control placeholder="Last name" required/>
        </Col>
      </Row>
      <Row style={{width: "100%"}}>
        <Col>
          <Form.Control type='email' pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' placeholder="Email" required/>
        </Col>
      </Row>
      <Row style={{width: "100%"}}>
        <Col>
          <Form.Control placeholder="Subject" required/>
        </Col>
      </Row>
      <Row style={{width: "100%"}}>
        <Col>
          <Form.Control className="message" placeholder="Message" required />
        </Col>
      </Row>
      <Row style={{width: "100%"}}>
        <Col>
          <Form.Control type='submit' className="btnct" value="Send" /> 
        </Col>
      </Row>
    </Form>
  );
}

