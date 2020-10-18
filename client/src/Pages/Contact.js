// React
import React from "react";
// Components
import ContactForm from "../Components/Form/ContactForm";
// React Bootstrap
import Container from "react-bootstrap/Container";
const Contact = () => {
  return (
    <Container>
      <header className="page-heading">
        <h1>Contact</h1>
      </header>
      <ContactForm />
    </Container>
  );
};

export default Contact;
