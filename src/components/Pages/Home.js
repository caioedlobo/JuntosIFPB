import React from "react";
import { Button, Grid } from "@material-ui/core";
import ButtonGroupLogin from "../atoms/ButtonGroupLogin";
import Description from "../atoms/Description";
import { Box } from "@material-ui/core";
import classes from "./stylesheet/Home.module.css";
import LoginText from "../atoms/LoginText";
import PasswordText from "../atoms/PasswordText";
import ImageLogin from "../atoms/ImageLogin";
import LogoImg from "../atoms/LogoImg";
import HeightFormHandler from "../atoms/HeightFormHandler";
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";
import LoginForm from "../atoms/LoginForm";

const Home = () => {
  return (
    <div data-testid="home">
      <Layout>
        {/* <Box sx={{ display: "flex" }}> */}
        <Grid
          container
          spacing={3}
          className={classes.content}
          alignItems="center"
        >
          {/*  <div className={classes.content}> */}

          <div className={classes.left}>
            <Grid item xs={5}>
              <Description />
            </Grid>
            <Grid item xs={7}>
              <LogoImg />
            </Grid>
          </div>

          <div className={classes.right}>
            <Grid
              item
              xs={9}
              className={`${classesCommon.form} ${classes.formHome}`}
            >
              <LoginForm />
              {/* <ImageLogin />

              <LoginText />
              <PasswordText />
              <HeightFormHandler />
              <ButtonGroupLogin>Entrar</ButtonGroupLogin>
              <HeightFormHandler />
              <Button>Não possui conta? Registre-se</Button> */}
            </Grid>
          </div>

          {/* </div> */}
          {/* </Box> */}
        </Grid>
      </Layout>
    </div>
  );
};

export default Home;
