import React from "react";
import { TextField } from "@mui/material";
const LoginText = (props) => {

  /* const [usernameData, setUsernameData] = useState("") */

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.emailLoginData(event.target.value)
    
  }
  
  
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField
        label="Digite o Email"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={handleData}
        
      ></TextField>
    </div>
  );
};

export default LoginText;
