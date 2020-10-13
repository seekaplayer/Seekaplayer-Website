import React from "react";
import Logo from "../Templates/Logo";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Navigation;
