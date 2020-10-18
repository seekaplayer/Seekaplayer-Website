// React
import React from "react";
// React-Bootstrap
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Input = ({ type, placeholder }) => {
  return <FormControl type={type} placeholder={placeholder} />;
};

export default Input;
