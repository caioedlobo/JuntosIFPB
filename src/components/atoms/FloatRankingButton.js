import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@material-ui/core";
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
import ButtonGroupLogin from "./ButtonGroupLogin";

const FloatRankingButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [demand, setDemand] = useState("");

  const handleChangeDemand = (event) => {
    setDemand(event.target.value);
  };

  /* const teste{
    if (demand === 0)
  } */

  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  };
  return (
    <div data-testid="float-ranking-button">
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
              <MenuItem value={1}>Ar-condicionado quebrado</MenuItem>
              <MenuItem value={2}>TV quebrada</MenuItem>
              <MenuItem value={3}>Limpeza</MenuItem>
              <MenuItem value={0}>Outra</MenuItem>
            </Select>
          </FormControl>

          {demand === 0 ? (
            <TextField
              style={{ width: "100%", marginBottom: "20px" }}
              label="Digite a sua demanda"
            ></TextField>
          ) : (
            console.log("do nothing")
          )}
          <TextField
            style={{ width: "100%", marginBottom: "20px" }}
            placeholder="Descrição da demanda"
            multiline
            rows={3}
            variant="outlined"
          ></TextField>
          <ButtonGroupLogin>Enviar</ButtonGroupLogin>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FloatRankingButton;
