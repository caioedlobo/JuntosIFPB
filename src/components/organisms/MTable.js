import React, { useState } from "react";
import faker from "faker";

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
import { Typography } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import classes2 from "./stylesheet/MTable.module.css";
import FilterSelect from "../atoms/FilterSelect";

import FilterButton from "../atoms/FilterButton";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 0,
    margin: "10px 0",
    maxWidth: 1200,
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
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [];
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
}

const MTable = () => {
  const [rows, setRows] = useState(USERS);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = USERS.filter((row) => {
      return row.job.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const classes = useStyles();
  return (
    <div data-testid="m-table">
      <Paper>
        <div className={classes2.table}>
          <div className={classes2.searchFilter}>
            <SearchBar
              className={classes2.searchBar}
              label="Teste"
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />

            {/* <FilterButton></FilterButton> */}
            <FilterSelect></FilterSelect>
          </div>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
