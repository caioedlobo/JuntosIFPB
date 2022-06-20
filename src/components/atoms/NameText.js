import React from 'react'
import { TextField } from "@mui/material";


const NameText = (props) => {

  const handleData = (event) => {
    /* setUsernameData(event.target.value) */
    props.nameLoginData(event.target.value)

    //props.errorNameController(event.target.value)
    //props.errorNameController(event.target.value)
    
  }
  return <div data-testid='name-text' style={{ width: "100%" }}>
    <TextField
        required
        label="Digite seu nome"
        margin="normal"
        fullWidth
        variant="standard"
        onChange={handleData}
        error= {props.errorName}
        helperText={props.errorNameMessage}
        style={{ height: "60px"}}
        
      ></TextField>
  </div>
}

export default NameText