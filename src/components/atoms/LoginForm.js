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
  const [errorController, setErrorController] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  let [previousEmail, setPreviousEmail] = useState("")

  const emailLoginData = (e) => {
    setEmailFormData(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
  };

  const errorControllerHandler = (e) => {
    setErrorController(true)
    setErrorMessage(e)
    setPreviousEmail(emailFormData)
  }

  /* const erroControllerHandler = (e) => {
    setErrorController(true)
    setErrorMessage(e)
    
  } */
  const emailErrorHandler = (e) => {
    /* console.log("alo", errorController, previousEmail) */
    setPreviousEmail("")
    if (previousEmail === e){
    setErrorController(true)

    }
    else{
      /* console.log(errorController, emailErrorController) */
      setErrorController(false)
      setErrorMessage("")
    }
    
  }

  return (
    <form
      data-testid="login-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        /* background: "red", */
        width:"300px"
      }}
      method="get"
      onSubmit={(e) => {
        
        e.preventDefault()
        
        
        Axios.post("http://localhost:3001/auth/authenticate", {
          email: emailFormData,
          password: passwordFormData
        })
        .then((response) => {console.log(response.error)})

        .catch(error => {
          errorControllerHandler(error.response.data.error)
        })

      

      }}
    >
      <ImageLogin />

      <LoginText 
      emailLoginData={emailLoginData} 
      errorMessage={errorMessage} 
      error={errorController} 
      errorEmailController={emailErrorHandler}
      />
      <PasswordText passwordLoginData={passwordLoginData} label={"Digite a senha"}/>
      <HeightFormHandler />

      <Button  type="submit" >Entrar</Button>

      <HeightFormHandler />
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerRegister}>
        Não possui conta? Registre-se
      </Button>
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerPassword}>
        Esqueceu sua senha? Clique aqui
      </Button>
    </form>
  );
};

export default LoginForm;
