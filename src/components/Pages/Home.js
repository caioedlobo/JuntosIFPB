import React from "react";
import { Grid } from "@material-ui/core";
import Description from "../atoms/Description";
import classes from "./stylesheet/Home.module.css";
import LogoImg from "../atoms/LogoImg";
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";

import LoginFormHandler from "../atoms/LoginFormHandler";
import LoggedPage from "../organisms/LoggedPage";

const Home = () => {
  if (1 === 2) {
    return (
      <div data-testid="home">
        <Layout>
          <LoggedPage />
        </Layout>
      </div>
    );
  }
  return (
    <div data-testid="home">
      <Layout>
        <Grid
          container
          className={classes.content}
          alignItems="center"
          spacing={4}
          style={{ padding: "0 48px" }}
        >
          <Grid
            item
            container
            xl={9}
            lg={9}
            md={8}
            sm={4}
            alignItems="center"
            spacing={4}
            className={classes.itemsLeft}
          >
            <Grid item xl={4} lg={4} sm={12}>
              <Description />
            </Grid>

            <Grid item xl={8} lg={8} sm={0}>
              <LogoImg />
            </Grid>
          </Grid>

          <Grid item container xl={3} lg={3} md={4} /* sm={8} */>
            <Grid item className={`${classesCommon.form} ${classes.formHome}`}>
              <LoginFormHandler />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Home;
