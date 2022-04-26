import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Zoom, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
/* import DialogActions from "@mui/material/DialogActions"; */
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Axios from "axios"


const FloatRankingButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [demand, setDemand] = useState("");
  const [description, setDescription] = useState("");
  const [otherDemand, setOtherDemand] = useState("");
  const [checkboxController, setCheckboxController] = useState(false);

  const handleChangeDemand = (event) => {
    setDemand(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value)
  }

  const handleOtherChangeDemand = (event) => {
    setOtherDemand(event.target.value);
  };

  const handleAnonymousCheckbox = () => {
    setCheckboxController(!checkboxController);
  }

  const submitForm = () => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjcyOWIyNjY2YTMxNTM4MDZhYWYzNyIsImlhdCI6MTY1MDkzNDUyMiwiZXhwIjoxNjUxMDIwOTIyfQ.D0WYTWI8upjNNPCqyKBy10DZVvX1TZUKgZ23Ihx3Gu8"
    Axios.interceptors.request.use(
      config => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
      },
      error => {
        return Promise.reject(error)
      }
    )

    if (demand !== 0){
      console.log(demand, description)
    Axios.post("https://backendjuntosifpb.herokuapp.com/demands",
    {
      title: demand,
      description: description,
      anonymous: checkboxController
    })
  }
  else {
    console.log(otherDemand, description)
    Axios.post("https://backendjuntosifpb.herokuapp.com/demands",
    {
      title: otherDemand,
      description: description,
      anonymous: checkboxController
    })
  }

  }


  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  };
  return (
    <div data-testid="float-ranking-button"
    
    >
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          style={style}
          color="white"
          aria-label="add"
          variant="extended"
          onClick={handleClickOpen}
          
        >
          <AddIcon style={{ marginRight: "2px" }} />
          Adicionar
        </Fab>
      </Zoom>

      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: "center" }}>
          Formulário de Demanda
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: "20px" }}>
            Para adicionar uma demanda ao Ranking, por favor preencha as
            informações a seguir.
          </DialogContentText>

          
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              /* style={{ paddingTop: "10px" }} */
            >
              Demanda
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={demand}
              label="Age"
              onChange={handleChangeDemand}
              style={{ marginBottom: "20px" }}
              
            >
              <MenuItem value={"Ar-condicionado quebrado"}>Ar-condicionado quebrado</MenuItem>
              <MenuItem value={"TV quebrada"}>TV quebrada</MenuItem>
              <MenuItem value={"Limpeza"}>Limpeza</MenuItem>
              <MenuItem value={0}>Outra</MenuItem>
            </Select>
          </FormControl>
          

          {demand === 0 ? (
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              label="Digite a sua demanda"
              
              onChange={handleOtherChangeDemand}
            ></TextField>
          ) : (
            console.log("2")
          )}
          <TextField
            style={{ width: "100%", marginBottom: "20px" }}
            placeholder="Descrição da demanda"
            multiline
            rows={3}
            variant="outlined"
            onChange={descriptionChangeHandler}
          ></TextField>

          <FormGroup sx={{marginBottom: "15px"}}>
            <FormControlLabel control={<Checkbox onChange={handleAnonymousCheckbox}/>} label="Enviar anonimamente" />
          </FormGroup>

          <Button type="submit" onClick={submitForm}>Enviar</Button>
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default FloatRankingButton;
