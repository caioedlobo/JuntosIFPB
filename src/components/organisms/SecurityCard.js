import React from 'react'
import {
  Card,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

const Security = () => {
  return <div data-testid='security-card'>
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
          style={{
            height: "600px",
            minHeight: "500px",
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
              SEGURANÇA
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "70%", xs: "90%" },
                gap: "50px",
              }}
            >

              <TextField variant="outlined" placeholder="Sua senha atual"></TextField>
              <TextField variant="outlined" placeholder="Sua nova senha"></TextField>
              <TextField variant="outlined" placeholder="Repita sua nova senha"></TextField>
              <Button variant="contained">Salvar Alterações</Button>
            </Box>
          </Box>
        </Card>
        </Box>
  </div>
}

export default Security