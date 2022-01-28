import React from "react";
import { Button } from "@material-ui/core";
import ButtonGroupLogin from "../components/UI/ButtonGroupLogin";
import Description from "../components/UI/Description";
import { Grid, Box } from "@material-ui/core";
import image from "../assets/undraw_team_collaboration_re_ow29-3.svg";

import classes from "./stylesheet/Home.module.css";
import LoginText from "../components/UI/LoginText";
import PasswordText from "../components/UI/PasswordText";
import ImageLogin from "../atoms/ImageLogin";
import LogoImg from "../atoms/LogoImg";
import HeightFormHandler from "../atoms/HeightFormHandler";
import Navbar from "../components/UI/Navbar";

const Home = (props) => {
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
