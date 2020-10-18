// React
import React from "react";
// Components
import Input from "./Input";
import FormButton from "./FormButton";
// React-Bootstrap
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Input type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Input type="text" placeholder="Enter Name" />
      </Form.Group>
      <FormButton variant="primary" type="Submit" text="Submit" />
    </Form>
  );
};

export default ContactForm;
