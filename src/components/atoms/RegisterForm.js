import React from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";

const RegisterForm = (props) => {

  const getData = (data) => {
    console.log(data)
  }
  
  return (
    <form
      data-testid="register-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
     onSubmit={(e) => {
       e.preventDefault();
     }} 
    >
      <ImageLogin />

      <LoginText usernameData={getData}/>
      <PasswordText passwordData={getData}/>
      <HeightFormHandler />
      <Button type="submit"> Registrar </Button>
      {/* <ButtonGroupLogin>Registrar</ButtonGroupLogin> */}
      <HeightFormHandler />
      <Button onClick={props.FormHandlerRegister}>
        Já possui conta? Entre
      </Button>
    </form>
  );
};

export default RegisterForm;
