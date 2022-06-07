import React, { useState, useEffect } from "react";
import { Card, Typography, Box /* TextField, Button */ } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes2 from "./stylesheet/MTable.module.css";
import { theme } from "../../theme";
import Axios from "axios";

const sx = {
  table: {
    minWidth: "300px",
  },
  tableContainer: {
    borderRadius: 0,
    margin: "10px 0",
    maxWidth: "600px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    background: "#2d7e27",
    /* color: theme.palette.getContrastText(theme.palette.primary.dark), */
    //  color: theme.palette.common.dark,
    color: "white",
    textAlign: "center !important",
  },
  tableCell: {
    textAlign: "center !important",
  },
  avatar: {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.getContrastText(theme.palette.grey[400]),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    color: theme.palette.common.white,
    backgroundColor: "grey",
    borderRadius: "8px",
    padding: "2px 6px",
    display: "flex",

    justifyContent: "center",

    /* width:"40px",
    backgroundr: "blue" */
  },
};

const ContributionsCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("userId"));
    //console.log(data);
    Axios.get(
      `https://backendjuntosifpb.herokuapp.com/auth/account/${localStorage.getItem(
        "userId"
      )}`
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        console.log(response.error);
      });
    //}
  }, []);

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
              style={{
                fontSize: "22px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              MINHAS CONTRIBUIÇÕES
            </Typography>
            <Paper elevation={10} style={{ overflowX: "auto" }}>
              <Box className={classes2.table}>
                <TableContainer /* component={Paper} */ sx={sx.tableContainer}>
                  {data != null ? (
                    <Table sx={sx.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={sx.tableHeaderCell}>Demanda</TableCell>
                          <TableCell sx={sx.tableHeaderCell}>Setor</TableCell>

                          <TableCell sx={sx.tableHeaderCell}>
                            Data de solicitação
                          </TableCell>
                          <TableCell sx={sx.tableHeaderCell}>Status</TableCell>
                          <TableCell sx={sx.tableHeaderCell}>Apoios</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell sx={sx.tableCell}>{row.title}</TableCell>

                            <TableCell sx={sx.tableCell}>
                              {row.sector}
                            </TableCell>

                            <TableCell sx={sx.tableCell}>
                              {row.dateGMT}
                            </TableCell>
                            <TableCell sx={sx.tableCell}>
                              <Typography
                                sx={sx.status}
                                style={{
                                  backgroundColor:
                                    (row.status === "Resolvido" && "green") ||
                                    (row.status === "Não Resolvido" && "red") ||
                                    (row.status === "Em Análise" &&
                                      "#B8860B") ||
                                    (row.status === "Atribuído" && "#556B2F") ||
                                    "grey",
                                }}
                              >
                                {row.status}
                              </Typography>
                            </TableCell>
                            <TableCell sx={sx.tableCell}>
                              <Box sx={sx.support}>{row.support}</Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p>Não há contribuição</p>
                  )}
                </TableContainer>
              </Box>
            </Paper>

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
