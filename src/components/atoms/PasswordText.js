import React from "react";
import { TextField } from "@mui/material";

const PasswordText = (props) => {

  const handleData = (event) => {
    props.passwordLoginData(event.target.value)
    
  }
  return (
    <div data-testid="password-text" style={{ width: "100%" }}>
      <TextField
        label={props.label}
        margin="normal"
        fullWidth
        color="primary"
        variant="standard"
        onChange={handleData}
        type="password"
      ></TextField>
    </div>
  );
};

export default PasswordText;
