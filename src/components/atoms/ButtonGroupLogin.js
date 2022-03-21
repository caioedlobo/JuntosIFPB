import React from "react";
import LoginButton from "./LoginButton";
import { ButtonGroup } from "@mui/material";

const sx = {
  root: {
    //background: "linear-gradient(45deg, #7b1fa2, #ce93d8)",
    /* background: "#4461f2", */
    //background: "#2f6933",
    border: 0,
    //borderRadius: 8,
    borderRadius: "15px",
    color: "white",
    width: "100%",
    background: "linear-gradient(to bottom right, #2f6933, #28b00a)",

    //padding: "0 30px",
  },
};

const ButtonGroupLogin = (props) => {
  return (
    <ButtonGroup fullWidth>
      <LoginButton sx={sx.root}>{props.children}</LoginButton>
      {/* <RegisterButton classes={classes}></RegisterButton> */}
    </ButtonGroup>
  );
};

export default ButtonGroupLogin;
