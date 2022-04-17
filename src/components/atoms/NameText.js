import React from 'react'
import { TextField } from "@mui/material";


const NameText = (props) => {

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.nameLoginData(event.target.value)
    
  }
  return <div data-testid='name-text' style={{ width: "100%" }}>
    <TextField
        label="Digite seu nome"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={handleData}
        
      ></TextField>
  </div>
}

export default NameText