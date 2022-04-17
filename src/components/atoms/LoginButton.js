import React from "react";
import ButtonUI from "@mui/material/Button";

const LoginButton = (props) => {
  //console.log(props.classes.root)

  return (
    <div data-testid="login-button" style={{ width: "100%" }}>
      <ButtonUI sx={props.sx} fullWidth>
        {props.children}
      </ButtonUI>
    </div>
  );
};

export default LoginButton;
