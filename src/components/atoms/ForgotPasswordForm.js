import React from "react";
import { Button } from "@material-ui/core";
import ButtonGroupLogin from "./ButtonGroupLogin";
import LoginText from "./LoginText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";

const ForgotPasswordForm = (props) => {
  return (
    <div
      data-testid="forgot-password-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <ImageLogin />

      <LoginText />

      <HeightFormHandler />
      <ButtonGroupLogin>Enviar</ButtonGroupLogin>
      <HeightFormHandler />
      <Button onClick={props.FormHandlerPassword}>Voltar para o Login</Button>
    </div>
  );
};

export default ForgotPasswordForm;
