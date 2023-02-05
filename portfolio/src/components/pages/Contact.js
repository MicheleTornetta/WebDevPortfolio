import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/main.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-3">
          <Container class="form">
            <Form class="Contact-Form" >
              <h1 className="ContactMe">Contact Me</h1>
              <Form.Group class="mb-3" controlId="formBasicName">
                  <label for="name">Name:</label>
                  <input Class="inputBox" id="name" name="name" required/>
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicEmail">
                  <label for="email">Email:</label>
                  <input Class="inputBox" id="email" name="email" required/>
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicSubjectLine">
                ` <label for="Subject">Subject:</label>
                  <input Class="Subject-line inputBox" id="Subject" name="subject" required/>
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicComment">
                  <label for="Comment">Comment:</label>
                  <input class="Comment-box inputBox" id="Comment" name="Comment" required/>
              </Form.Group>
                <div>
                  <Button variant="send" className="btn btn-primary">Send</Button>
                </div>
            </Form>
          </Container>
        </div>
        <div class="col-2"></div>
    </div>
  </div>
  );
}

