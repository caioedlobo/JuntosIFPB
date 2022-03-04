import React from "react";

import { Button } from "@material-ui/core";
import ButtonGroupLogin from "./ButtonGroupLogin";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";

import HeightFormHandler from "./HeightFormHandler";
const LoginForm = () => {
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
      <ButtonGroupLogin>Entrar</ButtonGroupLogin>
      <HeightFormHandler />
      <Button>Não possui conta? Registre-se</Button>
    </div>
  );
};

export default LoginForm;
