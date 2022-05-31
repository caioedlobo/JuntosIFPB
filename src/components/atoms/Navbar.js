import React from "react";

import Box from "@mui/material/Box";
import classes from "./stylesheet/Navbar.module.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import { Typography, Menu, MenuItem } from "@mui/material";

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div data-testid="navbar">
      <AppBar
        color={props.color}
        elevation={0}
        position="static" /* sx={{display:  {sm: "flex", xs: "none"} }} */
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none", xs: "flex" } }}
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <HomeOutlinedIcon />
                  <Typography>Início</Typography>
                </Box>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                to={"/ranking"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <BarChartOutlinedIcon />
                  <Typography>Ranking</Typography>
                </Box>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                to={"/contato"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "95px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <CallOutlinedIcon />
                  <Typography>Contato</Typography>
                </Box>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "85px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <AccountCircleOutlinedIcon />
                  <Typography>Entrar</Typography>
                </Box>
              </Link>
            </MenuItem>
          </Menu>

          <Box
            sx={{
              display: { sm: "flex", xs: "none" },
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
