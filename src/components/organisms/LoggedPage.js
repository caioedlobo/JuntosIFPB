import {
  CardActions,
  Card,
  Avatar,
  CardHeader,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import { display, width } from "@material-ui/system";
import React from "react";
import classesCommon from "../Pages/stylesheet/Common.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LoggedPage = () => {
  return (
    <div data-testid="logged-page">
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "column", xs: "row" },
          width: "98vw",
          maxWidth: "1060px",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            height: "600px",
            flex: "2.5",

            marginRight: "6px",
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
              <div
                style={{
                  display: "flex ",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "red",
                }}
              >
                <Avatar></Avatar>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <AccountCircleIcon />
                <Typography>Alterar Dados</Typography>
                <ArrowForwardIosIcon />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <LockOpenIcon />
                <Typography>Segurança</Typography>
                <ArrowForwardIosIcon />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <BookmarkBorderIcon />
                <Typography>Minhas Publicações</Typography>

                <ArrowForwardIosIcon />
              </div>
            </div>
          </CardActions>
        </Card>
        {/* <Box
          sx={{
            background: "blue",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        > */}
        <Card
          style={{
            height: "600px",
            width: "800px",
            display: "flex",
            justifyContent: "center",
            flex: "7.5",
            /*  margin: "0 auto", */
            /* marginLeft: "calc(50vw - 270px - 400px)", */
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "space-evenly",
            }}
          >
            <Typography style={{ fontSize: "22px" }}>ALTERAR DADOS</Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "25vw",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Seu nome"
                fullWidth
              ></TextField>
              <div style={{ marginBottom: "50px" }}></div>
              <TextField variant="outlined" placeholder="Seu email"></TextField>
            </Box>
            <Button variant="contained">Salvar Alterações</Button>
          </Box>
        </Card>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default LoggedPage;
