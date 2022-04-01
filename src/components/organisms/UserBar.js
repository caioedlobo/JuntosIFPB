import React from 'react'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LayoutUserBar from "../template/LayoutUserBar"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
  CardActions,
  Card,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Link,
  AppBar,
  Toolbar,
} from "@mui/material";

const UserBar = () => {
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
                <Toolbar sx={{display: {md: "none", sm: "none", xs: "flex"}, /* justifyContent: "flex-start" */}}>
                 <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
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