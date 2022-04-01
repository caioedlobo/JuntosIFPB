import React from "react";
import { TextField } from "@mui/material";

const PasswordText = (props) => {

  const handleData = (event) => {
    props.passwordData(event.target.value)
    
  }
  return (
    <div data-testid="password-text" style={{ width: "100%" }}>
      <TextField
        label="Senha"
        margin="normal"
        fullWidth
        color="primary"
        variant="standard"
        onChange={handleData}
      ></TextField>
    </div>
  );
};

export default PasswordText;
