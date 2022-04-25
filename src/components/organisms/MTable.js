import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import classes2 from "./stylesheet/MTable.module.css";
import { theme } from "../../theme";

const sx = {
  table: {
    minWidth: "968px",
  },
  tableContainer: {
    borderRadius: 0,
    margin: "10px 0",
    maxWidth: "1280px",
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
    padding: "3px 10px",
    display: "inline-block",
  },
  support: {
    /* justifyContent: "center",
    textAlign: "center", */
    display: "flex",
    flexDirection: "column",
    
    alignItems: "center"
  },
};

const MTable = (props) => {
  return (
    <div data-testid="m-table">
      <Paper>
        <Box className={classes2.table}>
          <TableContainer component={Paper} sx={sx.tableContainer}>
            <Table sx={sx.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={sx.tableHeaderCell}>Usuário</TableCell>
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
                {props.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Grid container>
                        <Grid item lg={2}>
                          <Avatar sx={sx.avatar} alt={row.name} src="." />
                        </Grid>
                        <Grid item lg={10}>
                          <Typography sx={sx.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">
                            {row.email}
                          </Typography>
                          <Typography color="textSecondary" variant="body2">
                            {row.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell sx={sx.tableCell}>{row.job}</TableCell>

                    <TableCell sx={sx.tableCell}>{row.job}</TableCell>

                    <TableCell sx={sx.tableCell}>{row.recent}</TableCell>
                    <TableCell sx={sx.tableCell}>
                      <Typography
                        sx={sx.status}
                        style={{
                          backgroundColor:
                            (row.status === "Resolvido" && "green") ||
                            (row.status === "Não Resolvido" && "red") ||
                            (row.status === "Em análise" && "#B8860B") ||
                            (row.status === "Em validação" && "#556B2F") ||
                            "grey",
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell sx={sx.tableCell}>
                      <Box sx={sx.support}>
                        {row.support}
                        <Button
                          variant="outlined"
                          size="small"
                          style={{ width: "10px" }}
                          
                        >
                          Apoiar
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </div>
  );
};

export default MTable;
