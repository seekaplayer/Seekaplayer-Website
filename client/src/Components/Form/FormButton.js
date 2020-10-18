// React
import React from "react";
// React-Bootstrap
import Button from "react-bootstrap/Button";

const FormButton = ({ variant, type, text }) => {
  return (
    <>
      <Button variant={variant} type={type}>
        {text}
      </Button>
    </>
  );
};

export default FormButton;
