import React from 'react';
import "../../styles/main.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import "bootstrap/dist/css/bootstrap.min.css";
import {render} from 'react-dom';
import * as yup from 'yup';
import { Formik } from 'formik'; 
// import 'core-js/es6/promise';
// import 'core-js/es6/set';
// import 'core-js/es6/map';

// const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  content: yup.string().required(),
});

export default function Contact() {
  return (

    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        comment: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isInValid,
        errors,
      }) => (

        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="validationFormik01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Can't be blank!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="validationFormik03">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                isInvalid={touched.subject && !errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationFormik04">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                name="content"
                value={values.content}
                onChange={handleChange}
                isInvalid={touched.content && !errors.content}
              />
              <Form.Control.Feedback type="invalid">
                {errors.content}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<Contact />);
// export default Contact;