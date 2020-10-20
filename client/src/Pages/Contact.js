// React
import React from "react";
// Components
import ContactForm from "../Components/ContactForm";
import Avatar from "../Components/Avatar";
// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <header className="page-heading">
            <h1>Contact</h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} lg={10}>
          <ContactForm />
        </Col>
        <Col>
          <Avatar className="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
