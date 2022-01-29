import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import Box from "@mui/material/Box";
import classes from "./stylesheet/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div data-testid="navbar">
      <AppBar color={props.color} elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              alignItems: "center",
              /* backgroundColor: "blue", */
              position: "relative",
              height: "105px",
            }}
            component="div"
          >
            {/* logo */}
            <Box
              sx={{
                /* backgroundColor: "pink" ,*/
                /* paddingLeft: "210px" */
                position: "absolute",
                left: "200px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {/* <IconButton> */}
              {/* <MenuOutlinedIcon /> */}
              {/* <img
                className={classes.ifImg}
                src="https://avatars.githubusercontent.com/u/2523928?s=280&v=4"
              ></img> */}
              {/* </IconButton> */}
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              {/* <Typography className={classes.typo}>Início</Typography>
            <Typography className={classes.typo}>Sobre</Typography>
            <Typography className={classes.typo}>Ranking</Typography>
            <Typography className={classes.typo}>Parceiros</Typography> */}
              <Link to={"/"} className={classes.typo}>
                Início
              </Link>
              <p className={classes.typo}>Sobre</p>
              <Link to={"/ranking"} className={classes.typo}>
                Ranking
              </Link>
              <p className={classes.typo}>Parceiros</p>
            </Box>
            <Box>
              {/* <Button className={classes.registerButton} variant="outlined">
              Registrar
            </Button> */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
Navbar.defaultProps = { color: "transparent" };
export default Navbar;
