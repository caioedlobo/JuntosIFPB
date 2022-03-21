import React from "react";
import { TextField } from "@mui/material";

const PasswordText = () => {
  return (
    <div data-testid="password-text" style={{ width: "100%" }}>
      <TextField
        label="Senha"
        margin="normal"
        fullWidth
        color="primary"
        variant="standard"
      ></TextField>
    </div>
  );
};

export default PasswordText;
