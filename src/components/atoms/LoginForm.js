import React from "react";
import { Button } from "@mui/material";
import ButtonGroupLogin from "./ButtonGroupLogin";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";

const LoginForm = (props) => {
  const teste = () => {
    console.log("clicou");
  };
  return (
    <div
      data-testid="login-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <ImageLogin />

      <LoginText />
      <PasswordText />
      <HeightFormHandler />
      <ButtonGroupLogin sendLogin={teste}>Entrar</ButtonGroupLogin>
      <HeightFormHandler />
      <Button onClick={props.FormHandlerRegister}>
        Não possui conta? Registre-se
      </Button>
      <Button onClick={props.FormHandlerPassword}>
        Esqueceu sua senha? Clique aqui
      </Button>
    </div>
  );
};

export default LoginForm;
