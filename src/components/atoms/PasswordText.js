import React, {useState} from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordText = (props) => {

  const handleData = (event) => {
    props.passwordLoginData(event.target.value)
    
    //props.errorPasswordController(event.target.value)
    //props.errorPasswordController(event.target.value)
  }
  
/*   const checkErrorPasswordText = (event) => {
    props.errorPasswordController(event.target.value)
  } */

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
        style={{ height: "60px"}}
        type={showPassword}
        InputProps={{
          endAdornment: 
          <InputAdornment position='end'>
            <IconButton onClick={handleShowPassword} size="small">
              {showPassword === "text" ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
        </InputAdornment>}}
      ></TextField>
    </div>
  );
};

export default PasswordText;
