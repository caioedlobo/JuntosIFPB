import React from "react";
import { Button } from "@material-ui/core";
import ButtonGroupLogin from "../atoms/ButtonGroupLogin";
import Description from "../atoms/Description";
import { Box } from "@material-ui/core";
import classes from "./stylesheet/Home.module.css";
import LoginText from "../atoms/LoginText";
import PasswordText from "../atoms/PasswordText";
import ImageLogin from "../atoms/ImageLogin";
import LogoImg from "../atoms/LogoImg";
import HeightFormHandler from "../atoms/HeightFormHandler";
import Navbar from "../atoms/Navbar";

const Home = () => {
  return (
    <div data-testid="home">
      <header>
        <Navbar />
      </header>
      <Box sx={{ display: "flex" }}>
        <div className={classes.left}>
          <Description />
          <LogoImg />
        </div>

        <div className={classes.right}>
          <div className={classes.form}>
            <ImageLogin />

            <LoginText />
            <PasswordText />
            <HeightFormHandler />
            <ButtonGroupLogin>Entrar</ButtonGroupLogin>
            <HeightFormHandler />
            <Button>Não possui conta? Registre-se</Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
