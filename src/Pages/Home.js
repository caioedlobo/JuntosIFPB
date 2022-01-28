import React from "react";
import { Button } from "@material-ui/core";
import ButtonGroupLogin from "../components/UI/ButtonGroupLogin";
import Description from "../components/UI/Description";
import { Grid, Box } from "@material-ui/core";
import image from "../assets/undraw_team_collaboration_re_ow29-3.svg";

import classes from "../App.module.css";
import LoginText from "../components/UI/LoginText";
import PasswordText from "../components/UI/PasswordText";
import ImgLogin from "../atoms/imageLogin";
import LogoImg from "../atoms/LogoImg";
import HeightFormHandler from "../atoms/HeightFormHandler";
import Navbar from "../components/UI/Navbar";

const Home = (props) => {
  return (
    <React.Fragment>
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
            <ImgLogin />
            <LoginText />
            <PasswordText />
            <HeightFormHandler />
            <ButtonGroupLogin>Entrar</ButtonGroupLogin>
            <HeightFormHandler />
            <Button>Não possui conta? Registre-se</Button>
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default Home;
