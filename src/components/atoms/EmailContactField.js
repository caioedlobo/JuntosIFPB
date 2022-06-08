import React from "react";
import { TextField } from "@mui/material";
const EmailContactField = (props) => {
  const handleEmailData = (event) => {
    props.emailData(event.target.value);
  };

  return (
    <div data-testid="email-contact-field" style={{ width: "100%" }}>
      <TextField
        placeholder="Email"
        variant="outlined"
        style={{ width: "100%", marginTop: "50px" }}
        onChange={handleEmailData}
        required={true}
      >
        Email
      </TextField>
    </div>
  );
};

export default EmailContactField;
