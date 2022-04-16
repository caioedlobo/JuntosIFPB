import React, { useState } from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios";

const ForgotPasswordForm = (props) => {

  const [emailForgotPasswordData, setEmailForgotPasswordData] = useState()

  const emailForgotPassword = (e) => {
    setEmailForgotPasswordData(e)
  }
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
        
        
         await Axios.post("http://localhost:3001/auth/forgot_password", {
          email: emailForgotPasswordData
        })
        
      }
      }
    >
      <ImageLogin />
      <HeightFormHandler />
      <p /* style={{marginTop: "30px"}} */>	
        Insira seu e-mail para procurar a sua conta.
      </p>
      <LoginText emailLoginData={emailForgotPassword}/>

      <HeightFormHandler />
      <Button type="submit" >Enviar</Button>
      <HeightFormHandler />
      <Button onClick={props.FormHandlerPassword}>Voltar para o Login</Button>
    </form>
  );
};

export default ForgotPasswordForm;
