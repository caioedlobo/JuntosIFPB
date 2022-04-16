import React from "react";
import { Box } from "@mui/material";
import Description from "../atoms/Description";
import classes from "./stylesheet/Home.module.css";
import LogoImg from "../atoms/LogoImg";
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";

import LoginFormHandler from "../atoms/LoginFormHandler";
/* import LoggedPage from "../organisms/LoggedPage"; */

const Home = () => {
  /* if (1 === 1) {
    return (
      <div data-testid="home">
        <Layout>
          <LoggedPage />
        </Layout>
      </div>
    );
  } */
  return (
    <div data-testid="home">
      <Layout>
        <Box
          
          
          sx={{ padding: "0 48px", display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          
            <div>
              <Description />
            </div>

            <div>
              <LogoImg />
              </div>
            
          

          
            <div item className={`${classesCommon.form} ${classes.formHome}`}>
              <LoginFormHandler />
            </div>
            </Box>
          
        
      </Layout>
    </div>
  );
};

export default Home;
