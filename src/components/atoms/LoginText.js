import React from "react";
import { TextField } from "@mui/material";
const LoginText = (props) => {

  /* const [usernameData, setUsernameData] = useState("") */

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.emailLoginData(event.target.value)
    //props.registerButtonHandler()
    //props.errorEmailController(event.target.value)
    //props.errorEmailController(event.target.value)
  }
  
  /* const checkErrorEmailText = (event) => {
    props.errorEmailController(event.target.value)
  } */
  //console.log(props.data)
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField
        required
        label="Digite o Email"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={handleData}
        //onChange={checkErrorEmailText}
        //onBlur={handleData}
        error= {props.errorEmail}
        helperText={props.errorEmailMessage}
        style={{ height: "60px"}}
        
      ></TextField>
    </div>
  );
};

export default LoginText;
