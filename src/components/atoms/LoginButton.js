import React from "react";
import ButtonUI from "@material-ui/core/Button";

const LoginButton = (props) => {
  //console.log(props.classes.root)

  return (
    <div data-testid="login-button" style={{ width: "100%" }}>
      <ButtonUI className={props.classes.root} fullWidth>
        {props.children}
      </ButtonUI>
    </div>
  );
};

export default LoginButton;
