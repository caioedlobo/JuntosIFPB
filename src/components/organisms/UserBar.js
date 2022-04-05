import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import LayoutUserBar from "../template/LayoutUserBar"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
  CardActions,
  Card,
  Avatar,
  Typography,
  Box,
  Toolbar,
  AppBar,
  Menu,
  MenuItem
} from "@mui/material";

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme } from '@mui/material/styles';
import {Link} from "@mui/material";

const UserBar = () => {


  const drawerWidth = 240;

  const [anchorEl, setAnchorEl] = React.useState(false);


  const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(false)
  }

  const toSecurity = () => {

  }

  return <div data-testid='user-bar'>
    
    <Card
          sx={{
            height: {md: "600px"},
            flex: "2.5",
            

            marginRight: { md: "6px", xs: "0" },
            marginBottom: { md: "0", xs: "6px" },
          }}
        >
          {/* <CardHeader>
          <Avatar></Avatar>
        </CardHeader> */}
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
                
                <Toolbar sx={{display: {md: "none", sm: "none", xs: "flex"}}}>
                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>

        <MenuItem>
        <Link to="/conta">
        <div style={{display: "flex" }}>
          <AccountCircleIcon/> 
          <Typography style={{paddingLeft: "5px"}}>Alterar Dados</Typography>
          </div>
          </Link>
        </MenuItem>

        <MenuItem /* sx={{textAlign: "center", alignSelf: "center"}} */>
          <Link to="/seguranca">
            <div style={{display: "flex" }}>
          <LockOpenIcon />
          <Typography style={{paddingLeft: "5px"}}>Segurança</Typography>
          </div>
          </Link>
        </MenuItem>


        <MenuItem>
        <Link to="/seguranca">
        <div style={{display: "flex" }}>
          <BookmarkBorderIcon />
          <Typography style={{paddingLeft: "5px"}}>Minhas Contribuições</Typography>
        </div>
          </Link>
          
        </MenuItem>
      </Menu>
                 </Toolbar>
                 
                
       
                 
                 
                 {/* <Box style={{display: "flex", alignSelf: "center", justifyContent: "center", textAlign: "center", flex: 0.7 }}> */}
                <Avatar sx={{marginBottom: {sm: "50px"}, display: "flex", textAlign: "center", alignSelf: "center"}} ></Avatar>
                {/* </Box> */}
              </Box>
              <Box sx={{
                
                display: "flex",
                flexDirection: {md: "column", sm: "row"},
                justifyContent: "space-around",
                /* background: "red" */
                
               }}>
                 {/* <Toolbar sx={{display: {md: "none", sm: "none", xs: "block"}}}>
                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
                 </Toolbar> */}
                 
              <LayoutUserBar linkTo={"/conta"}>
                <AccountCircleIcon/>
                <Typography style={{paddingLeft: "5px"}}>Alterar Dados</Typography>
                
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/seguranca"}>
              <LockOpenIcon />
                <Typography sx={{paddingLeft: "5px"}}>Segurança</Typography>
              </LayoutUserBar>

              <LayoutUserBar linkTo={"/contribuicoes"}>
              <BookmarkBorderIcon />
                <Typography style={{paddingLeft: "5px"}}>Minhas Contribuições</Typography>
              </LayoutUserBar>
              {/* <Link 
              href="seguranca"
              sx={{ display: {md: "flex", sm: "flex", xs: "none"}, flexDirection: { md: "row", sm: "column", }, alignItems: { md: "flex-start", xs: "center" }, marginBottom: "10px"  }}>
                <LockOpenIcon />
                <Typography sx={{paddingLeft: "5px"}}>Segurança</Typography>
                <ArrowForwardIosIcon sx={{ display: { md: "block", sm: "none", xs: "none", marginLeft: "auto" }, marginBottom: "10px",
               }} />
              </Link> */}
              {/* <LayoutUserBar link to={"/seguranca"}>
              <LockOpenIcon />
              <Typography sx={{paddingLeft: "5px"}}>Segurança</Typography>
              </LayoutUserBar> */}
              {/* Link 
              href="contribuicoes"
              sx={{ display: {md: "flex", sm:"flex", xs: "none"}, flexDirection: { md: "row", sm: "column" }, alignItems: { md: "center", xs: "center" } }}>
                <BookmarkBorderIcon />
                <Typography style={{paddingLeft: "5px"}}>Minhas Contribuições</Typography>

                <ArrowForwardIosIcon sx={{ display: { md: "block", sm: "none", xs: "none", marginLeft: "auto" }, }} />
              </Link> */}
              {/* <LayoutUserBar>
              <BookmarkBorderIcon />
                <Typography style={{paddingLeft: "5px"}}>Minhas Contribuições</Typography>
              </LayoutUserBar> */}
            </Box>
            </div>
          </CardActions>
        </Card>
  </div>
}

export default UserBar