import React, { useState } from "react";
import { Alert, Button, Snackbar, Stack, Typography } from "@mui/material";
import LoginText from "./LoginText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios";

const ForgotPasswordForm = (props) => {

  const [emailForgotPasswordData, setEmailForgotPasswordData] = useState()

  /* function convertStringToHex(str) {
    
	const arr1 = [];
	for (let n = 0, l = str.length; n < l; n ++) 
     {
		const hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   } */

  const emailForgotPassword = (e) => {
    setEmailForgotPasswordData(e)
  }

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <form
      data-testid="forgot-password-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        width:"300px"
      }}
      onSubmit={async (e) => {
        e.preventDefault();
        
        /* console.log(convertStringToHex(emailForgotPasswordData)) */
         await Axios.post(`https://backendjuntosifpb.herokuapp.com/auth/forgot_password`, {
          email: emailForgotPasswordData,
          
        }).then(() => {
          console.log("teste")
          setOpen(true)
        }).catch(() => {
          setOpen(true)
        })
        
      }
      }
    >
      <ImageLogin />
      <HeightFormHandler />
      <Typography /* style={{marginTop: "30px"}} */>	
        Insira seu e-mail para recuperar a sua conta.
      </Typography>
      <LoginText emailLoginData={emailForgotPassword}/>

      <HeightFormHandler />
      <Button type="submit" >Enviar</Button>
      <HeightFormHandler />
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerPassword}>Voltar para o Login</Button>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "right"}}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Um email foi enviado para recuperar sua conta
          </Alert>
        </Snackbar>
              </Stack>
    </form>
  );
};

export default ForgotPasswordForm;
