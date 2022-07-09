import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import LayoutUserBar from "../template/LayoutUserBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
/* import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; */
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import {
  CardActions,
  Card,
  Avatar,
  Typography,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useOutsourced } from "../providers/outsourced";
import { useAuth } from "../providers/auth";


const UserBar = (props) => {

  const { isOutsourced } = useOutsourced();
  const { setIsLoggedIn } = useAuth();

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);
  const navigate = useNavigate();




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDisconnect = () => {

    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  console.log(isOutsourced)

  return (
    <div data-testid="user-bar">
      <Card
        sx={{
          height: { md: "600px" },
          flex: "2.5",

          marginRight: { md: "6px", xs: "0" },
          marginBottom: { md: "0", xs: "6px" },
        }}
      >
        <CardActions
          sx={{
            background: "primary",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex ",

                /* background: "blue", */
                justifyContent: "center",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <Toolbar sx={{ display: { md: "none", sm: "none", xs: "flex" } }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
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
                    <Link to="/conta">
                      <div style={{ display: "flex" }}>
                        <AccountCircleIcon />
                        <Typography style={{ paddingLeft: "5px" }}>
                          Alterar Nome
                        </Typography>
                      </div>
                    </Link>
                  </MenuItem>

                  <MenuItem /* sx={{textAlign: "center", alignSelf: "center"}} */
                  >
                    <Link to="/seguranca">
                      <div style={{ display: "flex" }}>
                        <LockOpenIcon />
                        <Typography style={{ paddingLeft: "5px" }}>
                          Segurança
                        </Typography>
                      </div>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link to="/contribuicoes">
                      <div style={{ display: "flex" }}>
                        <BookmarkBorderIcon />
                        <Typography style={{ paddingLeft: "5px" }}>
                          Minhas Contribuições
                        </Typography>
                      </div>
                    </Link>
                  </MenuItem>

                  {isOutsourced ? (
                    <MenuItem>
                      <Link to="/contribuicoes">
                        <div style={{ display: "flex" }}>
                          <WorkOutlineIcon />
                          <Typography style={{ paddingLeft: "5px" }}>
                            Demandas
                          </Typography>
                        </div>
                      </Link>
                    </MenuItem>
                  ) : null}

                  <MenuItem>
                    <Button sx={{}} onClick={handleClickOpen}>
                      <div style={{ display: "flex" }}>
                        <LogoutIcon />
                        <Typography style={{ paddingLeft: "5px" }}>
                          Sair
                        </Typography>
                      </div>
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleCloseDialog}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Deseja mesmo se desconectar do Juntos pelo IFPB?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Clique "NÃO" para voltar e "SIM" para desconectar-se.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setOpen(false)}>Não</Button>
                        <Button onClick={handleDisconnect} autoFocus>
                          Sim
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </MenuItem>
                </Menu>
              </Toolbar>

              {/* <Box style={{display: "flex", alignSelf: "center", justifyContent: "center", textAlign: "center", flex: 0.7 }}> */}
              <Avatar
                sx={{
                  marginBottom: { sm: "50px" },
                  display: "flex",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              ></Avatar>
              {/* </Box> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column", sm: "row" },
                justifyContent: "space-around",
                /* background: "red" */
              }}
            >
              <LayoutUserBar linkTo={"/conta"}>
                <AccountCircleIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Alterar Nome
                </Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/seguranca"}>
                <LockOpenIcon />
                <Typography sx={{ paddingLeft: "5px" }}>Segurança</Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/contribuicoes"}>
                <BookmarkBorderIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Minhas Contribuições
                </Typography>
              </LayoutUserBar>

              {isOutsourced ? (
                <LayoutUserBar linkTo={"/demandas"}>
                  <WorkOutlineIcon />
                  <Typography style={{ paddingLeft: "5px" }}>
                    Demandas
                  </Typography>
                </LayoutUserBar>
              ) : null}

              <LayoutUserBar linkTo={"/servidores"}>
                <HowToRegIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Servidores
                </Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/setor"}>
                <AddModeratorIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Setor
                </Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/status"}>
                <AddModeratorIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Status
                </Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/demandas"}>
                <AddModeratorIcon />
                <Typography style={{ paddingLeft: "5px" }}>
                  Demandas
                </Typography>
              </LayoutUserBar>

              <Button
                sx={{
                  display: { md: "flex", sm: "flex", xs: "none" },
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: { md: "flex-start", xs: "center" },
                  /* marginBottom: "15px", */
                  justifyContent: "flex-start",
                }}
                onClick={handleClickOpen}
              >
                <LogoutIcon />

                <Typography style={{ paddingLeft: "5px" }}>Sair</Typography>
              </Button>
            </Box>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserBar;
