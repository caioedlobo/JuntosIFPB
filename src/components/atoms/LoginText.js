import React from "react";
import { TextField } from "@mui/material";
const LoginText = (props) => {

  /* const [usernameData, setUsernameData] = useState("") */

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.usernameData(event.target.value)
    
  }
  
  
  return (
    <div data-testid="login-text" style={{ width: "100%" }}>
      <TextField
        label="Usuário"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={handleData}
        
      ></TextField>
    </div>
  );
};

export default LoginText;
