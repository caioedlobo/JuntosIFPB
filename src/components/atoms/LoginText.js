import React from "react";
import { TextField } from "@mui/material";
const LoginText = (props) => {

  /* const [usernameData, setUsernameData] = useState("") */

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.emailLoginData(event.target.value)
    
    props.errorEmailController(event.target.value)
  }
  
  const checkErrorEmailText = (event) => {
    props.errorEmailController(event.target.value)
  }
  
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField
      
        label="Digite o Email"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={checkErrorEmailText}
        onBlur={handleData}
        error= {props.errorEmail}
        helperText={props.errorEmailMessage}
        
      ></TextField>
    </div>
  );
};

export default LoginText;
