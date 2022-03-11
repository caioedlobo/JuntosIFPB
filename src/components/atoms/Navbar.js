import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import Box from "@mui/material/Box";
import classes from "./stylesheet/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div data-testid="navbar">
      <AppBar color={props.color} elevation={0} position="static">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              alignItems: "center",

              height: "105px",
            }}
            component="div"
          >
            <Link to={"/"} className={classes.typo}>
              Início
            </Link>
            <Link to={"/ranking"} className={classes.typo}>
              Ranking
            </Link>

            <Link to={"/parceiros"} className={classes.typo}>
              Parceiros
            </Link>
            <Link to={"/contato"} className={classes.typo}>
              Contato
            </Link>
            <Link to={"/conta"} className={classes.typo}>
              Entrar
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
Navbar.defaultProps = { color: "transparent" };
export default Navbar;
