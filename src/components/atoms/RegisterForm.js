import React, {useState} from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios"
import NameText from "./NameText";

const RegisterForm = (props) => {

  const [nameFormData, setNameFormData] = useState()
  const [emailFormData, setEmailFormData] = useState()
  const [passwordFormData, setPasswordFormData] = useState()
  

  const emailLoginData = (e) => {
    setEmailFormData(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
  };

  const nameLoginData = (e) => {
    setNameFormData(e)
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
      data-testid="register-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        width: "300px",
        background: "blue",
        justifyContent: "center"
      }}
     onSubmit={(e) => {
       e.preventDefault();
      
      Axios.post("https://backend-juntosifpb.herokuapp.com/auth/register", {
        name: nameFormData,
        email: emailFormData,
        password: passwordFormData, 
      })
     }} 
    >
      <ImageLogin />

     <NameText nameLoginData={nameLoginData}/>
      <LoginText emailLoginData={emailLoginData}/>
      <PasswordText passwordLoginData={passwordLoginData} label={"Digite a senha"}/>
      
      <HeightFormHandler />
      <Button type="submit" onClick={emailValidation}> Registrar </Button>
      {/* <ButtonGroupLogin>Registrar</ButtonGroupLogin> */}
      <HeightFormHandler />
      <Button onClick={props.FormHandlerRegister}>
        Já possui conta? Entre
      </Button>
    </form>
  );
};

export default RegisterForm;
