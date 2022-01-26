import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { ButtonGroup } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    //background: "linear-gradient(45deg, #7b1fa2, #ce93d8)",
    /* background: "#4461f2", */
    background: "#2f6933",
    border: 0,
    borderRadius: 8,
    color: "white",
    width: "100%",

    //padding: "0 30px",
  },
});

const ButtonGroupLogin = (props) => {
  const classes = useStyles();
  return (
    <ButtonGroup>
      <LoginButton classes={classes}></LoginButton>
      {/* <RegisterButton classes={classes}></RegisterButton> */}
    </ButtonGroup>
  );
};

export default ButtonGroupLogin;
