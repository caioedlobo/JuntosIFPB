import React from 'react'
import {
  Card,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

const UserCard = () => {
  return <div data-testid='user-card'>
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
              ></TextField>

              <TextField variant="outlined" placeholder="Seu email"></TextField>
              <Button variant="contained">Salvar Alterações</Button>
            </Box>
          </Box>
        </Card>
        </Box>
        
      
  </div>
}

export default UserCard