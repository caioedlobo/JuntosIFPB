import React, {useState} from 'react'
import {
  Card,
  Typography,
  Box,
  TextField,
  Stack,
  Snackbar,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Axios from "axios";
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCurrentPassword = (event) => {
    setCurrentPassword(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }


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

  const [showCurrentPassword, setShowCurrentPassword] = useState("password")
  const [showPassword, setShowPassword] = useState("password")
  const [showConfirmPassword, setShowConfirmPassword] = useState("password")

  const handleShowCurrentPassword = () => {
    if (showCurrentPassword === "password"){
      setShowCurrentPassword("text")
    }
    else{
      setShowCurrentPassword("password")
    } 
  };

  const handleShowPassword = () => {
    if (showPassword === "password"){
      setShowPassword("text")
    }
    else{
      setShowPassword("password")
    } 
  };

  const handleShowConfirmPassword = () => {
    if (showConfirmPassword === "password"){
      setShowConfirmPassword("text")
    }
    else{
      setShowConfirmPassword("password")
    } 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(currentPassword.length > 5 && password.length > 5 && confirmPassword.length > 5){
    setPostController(true);
    Axios.put(`https://backendjuntosifpb.herokuapp.com/auth/PasswordModify/${localStorage.getItem("userId")}`,{
      currentPassword: currentPassword,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then((response) => {
      setPostController(false)
      setOpen(true)
    })
    .catch((response) => {
      setPostController(false);
      setOpenOnFail(true)
    }); 
  }
  else{
    setOpenOnInfo(true)
  }
}

  return <div data-testid='security-card'>
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
          style={{
            height: "600px",
            minHeight: "500px",
            display: "flex",

            flex: "7.5",
            /*  margin: "0 auto", */
            /* marginLeft: "calc(50vw - 270px - 400px)", */
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
              SEGURANÇA
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
              placeholder="Sua senha atual" 
              required={true} 
              onChange={handleCurrentPassword}
              type={showCurrentPassword}
              InputProps={{
                endAdornment: 
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowCurrentPassword}>
                    {showCurrentPassword === "text" ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
              </InputAdornment>}}
              ></TextField>

              <TextField variant="outlined" placeholder="Sua nova senha" type={showPassword} required={true} onChange={handlePassword}
              InputProps={{
                endAdornment: 
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword}>
                    {showPassword === "text" ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
              </InputAdornment>}}
              ></TextField>
              
              <TextField variant="outlined" placeholder="Repita sua nova senha" type={showConfirmPassword} required={true} onChange={handleConfirmPassword}
              InputProps={{
                endAdornment: 
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowConfirmPassword}>
                    {showConfirmPassword === "text" ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
              </InputAdornment>}}
              ></TextField>

              <LoadingButton variant="contained" type="submit" onClick={handleSubmit} loading={postController}>Salvar Alterações</LoadingButton>

            </Box>
            <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Senha alterada com sucesso!
          </Alert>
        </Snackbar>
              </Stack>

              <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openOnFail} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Erro ao alterar a senha.
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
}

export default Security