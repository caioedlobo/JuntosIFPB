import React, { useEffect, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Alert, Snackbar, Stack, Zoom } from "@mui/material";
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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Axios from "axios";
import { LoadingButton } from "@mui/lab";

const FloatRankingButton = () => {
  const [open, setOpen] = useState(false);
  const [presetDemands, setpresetDemands] = useState([]);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/presetDemand/listAllPresetDemands",
      {}
    )
      .then((res) => {
        setpresetDemands(res.data.ok);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/sector/listAllSectors",
      {}
    )
      .then((res) => {
        setSectors(res.data.ok);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(sectors);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [demand, setDemand] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [otherDemand, setOtherDemand] = useState("");
  const [checkboxController, setCheckboxController] = useState(false);

  const handleChangeDemand = (event) => {
    setDemand(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const handleOtherChangeDemand = (event) => {
    setOtherDemand(event.target.value);
  };

  const handleChangeSector = (event) => {
    setSector(event.target.value);
  };
  console.log(demand, sector);

  const handleAnonymousCheckbox = () => {
    setCheckboxController(!checkboxController);
  };

  const [postController, setPostController] = useState(false);

  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSucess(false);
    setOpenError(false);
    setOpenInfo(false);
  };

  const submitForm = () => {
    

    if (demand.length === 0 || description.length === 0 || sector.length === 0){
      setOpenInfo(true)
    }
    else if (demand !== 0) {
      //console.log(demand, description);
      setPostController(true);
      
      Axios.post(
        "https://backendjuntosifpb.herokuapp.com/demands",
        {
          title: demand,
          description: description,
          isAnonymous: checkboxController,
          sector: sector,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
        .then((res) => {
          setPostController(false);
          setOpenSucess(true)
          handleClose();
        })
        .catch((err) => {
          setOpenError(true)
          setPostController(false);
        });
    } else {
      setPostController(true);
      //console.log(otherDemand, description);
      Axios.post(
        "https://backendjuntosifpb.herokuapp.com/demands",
        {
          title: otherDemand,
          description: description,
          isAnonymous: checkboxController,
          sector: sector,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
        .then((res) => {
          setOpenSucess(true)
          setPostController(false);
          handleClose();
        })
        .catch((err) => {
          setOpenError(true)
          setPostController(false);
        });
    }
  };

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
          color="inherit"
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
              label="Demand"
              onChange={handleChangeDemand}
              style={{ marginBottom: "20px" }}
            >
              {presetDemands.map((presetDemand) => (
                <MenuItem value={`${presetDemand.title}`}>
                  {presetDemand.title}
                </MenuItem>
              ))}
              <MenuItem value={0}>Outra</MenuItem>
            </Select>
          </FormControl>

          {demand === 0 ? (
            <div>
              <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                label="Digite a sua demanda"
                onChange={handleOtherChangeDemand}
                required={true}
              ></TextField>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  /* style={{ paddingTop: "10px" }} */
                >
                  Setor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sector}
                  label="Sector"
                  onChange={handleChangeSector}
                  style={{ marginBottom: "20px" }}
                >
                  {sectors.map((sector) => (
                    <MenuItem value={`${sector.title}`}>
                      {sector.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          ) : (
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                /* style={{ paddingTop: "10px" }} */
              >
                Setor
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sector}
                label="Sector"
                onChange={handleChangeSector}
                style={{ marginBottom: "20px" }}
              >
                {sectors.map((sector) => (
                  <MenuItem value={`${sector.title}`}>{sector.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <TextField
            style={{ width: "100%", marginBottom: "20px" }}
            placeholder="Descrição da demanda"
            multiline
            rows={3}
            variant="outlined"
            onChange={descriptionChangeHandler}
            required={true}
          ></TextField>

          <FormGroup sx={{ marginBottom: "15px" }}>
            <FormControlLabel
              control={<Checkbox onChange={handleAnonymousCheckbox} />}
              label="Enviar anonimamente"
            />
          </FormGroup>

          {/* <Button type="submit" onClick={submitForm}>
            Enviar
          </Button> */}
          <LoadingButton
            type="submit"
            onClick={submitForm}
            loading={postController}
          >
            Enviar
          </LoadingButton>
        </DialogContent>
      </Dialog>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openSucess} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Demanda enviada com sucesso!
          </Alert>
        </Snackbar>
      </Stack>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Erro ao enviar demanda!
          </Alert>
        </Snackbar>
      </Stack>

      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          Preencha todos os campos!
          </Alert>
        </Snackbar>
      </Stack>

          
    </div>
  );
};

export default FloatRankingButton;
