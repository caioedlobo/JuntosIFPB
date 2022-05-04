import React from "react";
import { Card, Typography, Box /* TextField, Button */ } from "@mui/material";
/* import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"; */

const ContributionsCard = () => {
  return (
    <div data-testid="contributions-card" style={{ width: "100%" }}>
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
              MINHAS CONTRIBUIÇÕES
            </Typography>

            {/*  <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "70%", xs: "90%" },
                gap: "50px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Sua senha atual"
              ></TextField>
              <TextField
                variant="outlined"
                placeholder="Sua nova senha"
              ></TextField>
              <TextField
                variant="outlined"
                placeholder="Repita sua nova senha"
              ></TextField>
              <Button variant="contained">Salvar Alterações</Button>
            </Box> */}
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default ContributionsCard;
