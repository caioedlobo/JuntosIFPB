import {
  CardActions,
  Card,
  Avatar,
  Typography,
  Box,
  TextField,
  Button,
  Link,
} from "@mui/material";
import React from "react";

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
          flexDirection: { md: "row", xs: "column" },
          width: "98vw",
          maxWidth: "1060px",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "600px",
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
              <div
                style={{
                  display: "flex ",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Avatar></Avatar>
              </div>
              <Link
                href="fdsfsd"
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column" },
                  alignItems: { md: "flex-start", xs: "center" },
                }}
              >
                <AccountCircleIcon />
                <Typography>Alterar Dados</Typography>
                <ArrowForwardIosIcon
                  sx={{
                    display: { md: "block", xs: "none", marginLeft: "auto" },
                  }}
                />
              </Link>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <LockOpenIcon />
                <Typography>Segurança</Typography>
                <ArrowForwardIosIcon sx={{ marginLeft: "auto" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <BookmarkBorderIcon />
                <Typography>Minhas Publicações</Typography>

                <ArrowForwardIosIcon sx={{ marginLeft: "auto" }} />
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

            display: "flex",

            flex: "7.5",
            /*  margin: "0 auto", */
            /* marginLeft: "calc(50vw - 270px - 400px)", */
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              style={{ fontSize: "22px", marginBottom: "20px" }}
            >
              ALTERAR DADOS
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "70%", xs: "90%" },
                gap: "50px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Seu nome"
                fullWidth
              ></TextField>

              <TextField variant="outlined" placeholder="Seu email"></TextField>
              <Button variant="contained">Salvar Alterações</Button>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* </Box> */}
    </div>
  );
};

export default LoggedPage;
