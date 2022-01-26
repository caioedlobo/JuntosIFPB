import React from "react";
import ButtonUI from "@material-ui/core/Button";
import ButtonGroupLogin from "./ButtonGroupLogin";

const LoginButton = (props) => {
  //console.log(props.classes.root)
  return (
    <ButtonUI className={props.classes.root} fullWidth>
      Entrar
    </ButtonUI>
  );
};

export default LoginButton;
