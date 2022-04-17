import React from "react";

import Box from "@mui/material/Box";
import classes from "./stylesheet/Navbar.module.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
  Typography,
  Menu,
  MenuItem
} from "@mui/material";



const Navbar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(false);


  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(false)
  }

  return (
    <div data-testid="navbar">
      <AppBar color={props.color} elevation={0} position="static" /* sx={{display:  {sm: "flex", xs: "none"} }} */>
        <Toolbar>
        <IconButton edge="start" color="info" aria-label="menu" sx={{ mr: 2, display:  {sm: "none", xs: "flex"} }} onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
        <Link to={"/"}>
          <Typography>Início</Typography>
        </Link>
        </MenuItem>

        <MenuItem>
        <Link to={"/ranking"}>
          <Typography>Ranking</Typography>
        </Link>
        </MenuItem>

        <MenuItem>
        <Link to={"/contato"}>
          <Typography>Contato</Typography>
        </Link>
        </MenuItem>
      </Menu>
      
          <Box
            sx={{
              display: {sm: "flex", xs: "none"},
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

            <Link to={"/contato"} className={classes.typo}>
              Contato
            </Link>
            <Link to={"/login"} className={classes.typo}>
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
