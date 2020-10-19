// React
import React from "react";
// React-Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="formEmail">
        <Form.Group controlId="formName">
          <Form.Label>Name *</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Full Name" />
        </Form.Group>
        <Form.Label>Email Address *</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" Placeholder="Enter Your Phone Number" />
      </Form.Group>
      <Form.Group controlId="formSubject">
        <Form.Label>Subject *</Form.Label>
        <Form.Control as="select">
          <option>General</option>
          <option>Business</option>
          <option>Sponsorship</option>
          <option>Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          placeholder="Enter Your Message Here..."
        ></Form.Control>
      </Form.Group>
      <Button className="brand-btn" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
