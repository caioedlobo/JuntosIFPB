import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import classes2 from "./stylesheet/MTable.module.css";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: theme.palette.primary.dark,
    /* color: theme.palette.getContrastText(theme.palette.primary.dark), */
    color: theme.palette.primary.dark,
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "grey",
    borderRadius: "8px",
    padding: "3px 10px",
    display: "inline-block",
  },
  support: {
    justifyContent: "center",
    textAlign: "center",
  },
}));

/* let USERS = [];
let STATUSES = [
  "Em validação",
  "Em análise",
  "Não atribuído",
  "Resolvido",
  "Não Resolvido",
];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    job: faker.name.jobTitle(),
    joinDate: faker.date.past().toLocaleDateString("pt-BR"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
} */

const MTable = (props) => {
  /* setSelectedFilter(selectedFilter); */
  /* console.log(selectedFilter); */
  /* const selectedFilter = "";
  console.log(props.selectedFilter); */
  /* const requestFilter = (filteredVal) => {
    const filteredRows = USERS.filter((row) => {
      if (props.filter === "None") {
        console.log("FOOIII");
        return;
      }
    });
  }; */

  const classes = useStyles();
  return (
    <div data-testid="m-table">
      <Paper>
        <div className={classes2.table}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    Usuario
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Demanda
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Setor
                  </TableCell>

                  <TableCell className={classes.tableHeaderCell}>
                    Data de solicitação
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Status
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Apoios
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map((row) => (
                  <TableRow
                    key={row.name}
                    /* sx={{ "&:last-child td, &:last-child th": { border: 0 } }} */
                  >
                    {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                    <TableCell>
                      <Grid container>
                        <Grid item lg={2}>
                          <Avatar
                            className={classes.avatar}
                            alt={row.name}
                            src="."
                          />
                        </Grid>
                        <Grid item lg={10}>
                          <Typography className={classes.name}>
                            {row.name}
                          </Typography>
                          <Typography color="textSecondary" variant="body2">
                            {row.email}
                          </Typography>
                          <Typography color="textSecondary" variant="body2">
                            {row.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell>{row.job}</TableCell>
                    {/* <TableCell>{row.email}</TableCell> */}
                    <TableCell>{row.job}</TableCell>

                    <TableCell>{row.joinDate}</TableCell>
                    <TableCell>
                      <Typography
                        className={classes.status}
                        style={{
                          backgroundColor:
                            (row.status === "Resolvido" && "green") ||
                            (row.status === "Não Resolvido" && "red") ||
                            (row.status === "Em análise" && "#B8860B") ||
                            (row.status === "Em validação" && "#556B2F"),
                        }}
                      >
                        {row.status}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <div className={classes.support}>
                        {row.support}
                        <Button variant="outlined">Apoiar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
};

export default MTable;
