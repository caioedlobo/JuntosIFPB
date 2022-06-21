import React, { useState } from "react";
import { Card, Typography, Box, TextField, Stack, Snackbar, Alert } from "@mui/material";
import Axios from "axios";
import { LoadingButton } from "@mui/lab";

const UserCard = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [openOnFail, setOpenOnFail] = React.useState(false);
  const [openOnInfo, setOpenOnInfo] = React.useState(false);
  const [postController, setPostController] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenOnFail(false)
    setOpenOnInfo(false)
  };

  const handleSubmit = () => {
    if (password.length > 5 && name.length > 1) {
      setPostController(true);
      Axios.put(
        `https://backendjuntosifpb.herokuapp.com/auth/DataModify/${localStorage.getItem(
          "userId"
        )}`,
        {
          name: name,
          password: password,
        }
      ).then((response) => {
        setPostController(false)
        setOpen(true)
      }).catch((response) => {
        setOpenOnFail(true)
        setPostController(false)
        
      });
    } else {
      setOpenOnInfo(true)
    }
  };

  return (
    <div data-testid="user-card">
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "85vw",
          maxWidth: "700px",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "600px",
            minHeight: "400px",
            display: "flex",

            flex: "7.5",

          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              style={{ fontSize: "22px", marginBottom: "20px" }}
            >
              ALTERAR NOME
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "70%", xs: "90%" },
                gap: "50px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Seu nome"
                fullWidth
                onChange={handleName}
                required={true}
              ></TextField>

              <TextField
                variant="outlined"
                placeholder="Sua senha"
                onChange={handlePassword}
                type="password"
                required={true}
              ></TextField>
              <LoadingButton variant="contained" type="submit" loading={postController} onClick={handleSubmit}>
                Salvar Alterações
              </LoadingButton>
            </Box>
            <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Nome alterado com sucesso!
          </Alert>
        </Snackbar>
              </Stack>

              <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openOnFail} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Erro ao alterar o nome.
          </Alert>
        </Snackbar>
              </Stack>

              <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openOnInfo} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Preencha todos os campos.
          </Alert>
        </Snackbar>
              </Stack>

              
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default UserCard;
