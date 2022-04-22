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

  const [errorEmailController, setErrorEmailController] = useState(false)
  const [errorEmailMessage, setErrorEmailMessage] = useState("")
  let [previousEmail, setPreviousEmail] = useState("")

  const [errorPasswordController, setErrorPasswordController] = useState(false)
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("")
  let [previousPassword, setPreviousPassword] = useState("")

  const emailLoginData = (e) => {
    setEmailFormData(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
  };

  const errorControllerHandler = (e) => {
    if(e === "Invalid password"){
      setErrorPasswordController(true)
      setErrorPasswordMessage(e)
      setPreviousPassword(passwordFormData)
    }
    else{
    setErrorEmailController(true)
    setErrorEmailMessage(e)
    setPreviousEmail(emailFormData)
    }
  }

  
  const emailErrorHandler = (e) => {
    setPreviousEmail("")
    if (previousEmail === e){
    setErrorEmailController(true)

    }
    else{
      setErrorEmailController(false)
      setErrorEmailMessage("")
    }
    
  }

  const passwordErrorHandler = (e) => {
    setPreviousPassword("")
    if (previousPassword === e){
    setErrorPasswordController(true)

    }
    else{
      setErrorPasswordController(false)
      setErrorPasswordMessage("")
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
        
        
        Axios.post("https://backendjuntosifpb.herokuapp.com/auth/authenticate", {
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
      errorEmailMessage={errorEmailMessage} 
      errorEmail={errorEmailController} 
      errorEmailController={emailErrorHandler}
      />
      <PasswordText 
      passwordLoginData={passwordLoginData} 
      errorPasswordMessage={errorPasswordMessage} 
      errorPassword={errorPasswordController} 
      errorPasswordController={passwordErrorHandler}
      label={"Digite a senha"}/>
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
