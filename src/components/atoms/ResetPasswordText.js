import React, {useState} from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPasswordText = (props) => {
  const handlePasswordData = (event) => {
    props.passwordData(event.target.value);
  };

const [showPassword, setShowPassword] = useState("password")

const handleShowPassword = () => {
  if (showPassword === "password"){
    setShowPassword("text")
  }
  else{
    setShowPassword("password")
  }     
}

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
        type={showPassword}
        InputProps={{
          endAdornment: 
          <InputAdornment position='end'>
            <IconButton onClick={handleShowPassword} size="small">
              {showPassword === "text" ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
        </InputAdornment>}}
      >
        Email
      </TextField>
    </div>
  );
};

export default ResetPasswordText;
