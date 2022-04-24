import React from "react";
import { TextField } from "@mui/material";

const PasswordText = (props) => {

  const handleData = (event) => {
    props.passwordLoginData(event.target.value)
    
    //props.errorPasswordController(event.target.value)
    //props.errorPasswordController(event.target.value)
  }
  
/*   const checkErrorPasswordText = (event) => {
    props.errorPasswordController(event.target.value)
  } */
  return (
    <div data-testid="password-text" style={{ width: "100%" }}>
      <TextField
        required
        label= {props.label}
        margin="normal"
        fullWidth
        color="primary"
        variant="standard"
        onChange={handleData}
        //onChange={checkErrorPasswordText}
        //onBlur={handleData}
        error= {props.errorPassword}
        helperText={props.errorPasswordMessage}
        type="password"
        style={{ height: "60px"}}
      ></TextField>
    </div>
  );
};

export default PasswordText;
