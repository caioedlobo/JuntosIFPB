import React from "react";
import { Button } from "@material-ui/core";
import ButtonGroupLogin from "./ButtonGroupLogin";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";

const RegisterForm = () => {
  return (
    <div
      data-testid="register-form"
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
      <ButtonGroupLogin>Registrar</ButtonGroupLogin>
      <HeightFormHandler />
      <Button>Já possui conta? Entre</Button>
    </div>
  );
};

export default RegisterForm;
