// React
import React from "react";
import Logo from "../Templates/Logo";
// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// Custom CSS
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="services">Services</Nav.Link>
              <Nav.Link href="portfolio">Portfolio</Nav.Link>
              <Nav.Link href="blog">Blog</Nav.Link>
              <Nav.Link href="https://twitch.tv/seekaplayer">Twitch</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
