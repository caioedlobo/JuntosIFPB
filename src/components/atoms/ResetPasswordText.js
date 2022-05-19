import React from "react";
import { TextField } from "@mui/material";

const ResetPasswordText = (props) => {
  const handlePasswordData = (event) => {
    props.passwordData(event.target.value);
  };

  return (
    <div
      data-testid="reset-password-text"
      style={{ width: "100%", textAlign: "center" }}
    >
      <TextField
        placeholder="Nova senha"
        variant="outlined"
        style={{ width: "70%", margin: " 30px 50px" }}
        onChange={handlePasswordData}
        required
        type="password"
      >
        Email
      </TextField>
    </div>
  );
};

export default ResetPasswordText;
