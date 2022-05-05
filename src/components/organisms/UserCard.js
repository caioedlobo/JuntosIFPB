import React, { useState } from "react";
import { Card, Typography, Box, TextField, Button } from "@mui/material";
import Axios from "axios";

const UserCard = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password.length > 5 && name.length > 1) {
      Axios.put(
        `https://backendjuntosifpb.herokuapp.com/auth/DataModify/${localStorage.getItem(
          "userId"
        )}`,
        {
          name: name,
          password: password,
        }
      ).then((response) => {
        console.log(response);
      });
    } else {
      console.log("Senha muito curta");
    }
  };

  return (
    <div data-testid="user-card">
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "85vw",
          maxWidth: "700px",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "600px",
            minHeight: "400px",
            display: "flex",

            flex: "7.5",
            /* paddingBottom: {xs: "10px"} */
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
                onChange={handleName}
              ></TextField>

              <TextField
                variant="outlined"
                placeholder="Sua senha"
                onChange={handlePassword}
                type="password"
              ></TextField>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Salvar Alterações
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default UserCard;
