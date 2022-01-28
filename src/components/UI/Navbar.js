import React from "react";
import {
  AppBar,
  Typography,
  Tabs,
  Tab,
  Toolbar,
  IconButton,
  Link as MaterialLink,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import App from "../../App";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import Box from "@mui/material/Box";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
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
            <img
              className={classes.ifImg}
              src="https://avatars.githubusercontent.com/u/2523928?s=280&v=4"
            ></img>
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
  );
};
Navbar.defaultProps = { color: "transparent" };
export default Navbar;
