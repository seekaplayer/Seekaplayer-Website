import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <span className="ml-auto">
          &copy; {new Date().getFullYear()} Seekaplayer, All Rights Reserved.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
