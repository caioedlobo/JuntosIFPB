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
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";

const Home = () => {
  return (
    <div data-testid="home">
      <Layout>
        <Box sx={{ display: "flex" }}>
          <div className={classes.left}>
            <Description />
            <LogoImg />
          </div>

          <div className={classes.right}>
            <div className={`${classesCommon.form} ${classes.formHome}`}>
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
      </Layout>
    </div>
  );
};

export default Home;
