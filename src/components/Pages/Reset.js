import React, { useState } from "react";
import Layout from "../template/Layout";
import classesCommon from "./stylesheet/Common.module.css";
import imageReset from "./../../assets/undraw_forgot_password_re_hxwm.svg";
import { Alert, Box, Button, Snackbar, Stack } from "@mui/material";
import ResetPasswordText from "../atoms/ResetPasswordText";
import Axios from "axios";

const Reset = () => {
  const [resetPassword, setResetPassword] = useState();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenError(false);
  };

  const resetPasswordData = (e) => {
    setResetPassword(e);
  };

  function hex_to_ascii(str1) {
    try{
      const hex = str1.toString();
      let str = "";
      for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
      }
      return str;
    }
    catch{
      
      setOpenError(true)
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { sm: "560px", xs: "380px" },
          height: "max-content" /*  padding: "28px 24px" */,
        }}
      >
        <form
          data-testid="reset"
          className={`${classesCommon.form}`}
          onSubmit={(e) => {
            e.preventDefault();

            const email = e.target.action.split("=")[2];
            const token = e.target.action.split("=")[1];
            /* console.log(hex_to_ascii(email)) */
            Axios.post(
              "https://backendjuntosifpb.herokuapp.com/auth/reset_password",
              {
                email: hex_to_ascii(email),
                password: resetPassword,
                token: token,
              }
            ).then(() => {
              setOpen(true);
            }).catch(() => {
              
              setOpen(false);
            });
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginBottom: "15px",
              backgroundSize: "contain",
              justifyContent: "center",
            }}
          >
            <img
              src={imageReset}
              alt="imageReset"
              style={{ width: "50%", marginTop: "15px" }}
            ></img>
          </Box>
          <div style={{ lineHeight: "1.5" }}>
            Digite sua nova senha para resetá-la:
          </div>
          <ResetPasswordText passwordData={resetPasswordData} />

          <Box sx={{ width: "70%", marginBottom: "30px" }}>
            <Button type="submit">Enviar</Button>
          </Box>
        </form>
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Senha alterada com sucesso!
          </Alert>
        </Snackbar>
              </Stack>

              <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Erro ao alterar senha!
          </Alert>
        </Snackbar>
              </Stack>
      </Box>
    </Layout>
  );
};

export default Reset;
