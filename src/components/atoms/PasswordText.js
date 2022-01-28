import React from "react";
import { TextField } from "@material-ui/core";

const PasswordText = () => {
  return (
    <div data-testid="password-text" style={{ width: "100%" }}>
      <TextField
        label="Senha"
        margin="normal"
        fullWidth
        color="primary"
      ></TextField>
    </div>
  );
};

export default PasswordText;
