import React from "react";
import { TextField } from "@mui/material";
const LoginText = () => {
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField
        label="Usuário"
        margin="normal"
        fullWidth
        variant="standard"
      ></TextField>
    </div>
  );
};

export default LoginText;
