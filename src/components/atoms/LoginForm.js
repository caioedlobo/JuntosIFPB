import React, { useState } from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios";

const LoginForm = (props) => {
  const [emailFormData, setEmailFormData] = useState()
  const [passwordFormData, setPasswordFormData] = useState()

  const emailLoginData = (e) => {
    setEmailFormData(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    console.log("Entrou")
    if (regEx.test(emailFormData)){
      console.log("Email válido")
    }
    else if (!regEx.test(emailFormData) && emailFormData !== ""){
      console.log("Email não é válido")
    }
    else{
      console.log("alooo")
    }
  }

  return (
    <form
      data-testid="login-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        background: "red",
        width:"300px"
      }}
      action="http://localhost:3000/conta"
      method="get"
      onSubmit={(e) => {
        console.log(emailFormData)
        console.log(passwordFormData)
        e.preventDefault()
        Axios.post("https://backend-juntosifpb.herokuapp.com/auth/authenticate", {
          email: emailFormData,
          password: passwordFormData
        })
      }}
    >
      <ImageLogin />

      <LoginText emailLoginData={emailLoginData}/>
      <PasswordText passwordLoginData={passwordLoginData}/>
      <HeightFormHandler />
      <Button  type="submit" onClick={emailValidation} >Entrar</Button>
      <HeightFormHandler />
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerRegister}>
        Não possui conta? Registre-se
      </Button>
      <Button onClick={props.FormHandlerPassword}>
        Esqueceu sua senha? Clique aqui
      </Button>
    </form>
  );
};

export default LoginForm;
