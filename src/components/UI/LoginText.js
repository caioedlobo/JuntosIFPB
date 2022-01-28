import React from "react";
import { TextField } from "@material-ui/core";
const LoginText = () => {
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField label="Usuário" margin="normal" fullWidth></TextField>
    </div>
  );
};

export default LoginText;
