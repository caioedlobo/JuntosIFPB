import { React, useState } from "react";
import { Grid } from "@material-ui/core";
import Description from "../atoms/Description";
import classes from "./stylesheet/Home.module.css";
import LogoImg from "../atoms/LogoImg";
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";
import LoginForm from "../atoms/LoginForm";
import RegisterForm from "../atoms/RegisterForm";

const Home = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

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
              {isLoginForm ? <LoginForm /> : <RegisterForm />}
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
