// React
import React from "react";
// React-Bootstrap
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5 text-center">
        <small>
          &copy; {new Date().getFullYear()} Seekaplayer, All Rights Reserved.
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
