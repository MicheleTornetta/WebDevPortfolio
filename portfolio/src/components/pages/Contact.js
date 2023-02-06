import React from "react";
import "../../styles/main.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="Subject" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control className="message" placeholder="Message" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="send" className="btnct btn-primary">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

