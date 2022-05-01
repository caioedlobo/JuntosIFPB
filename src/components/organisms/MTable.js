import React, { useEffect, useState } from "react";

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
import Axios from "axios";

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
    display: "flex",

    justifyContent: "center",

    /* width:"40px",
    backgroundr: "blue" */
  },
  support: {
    /* justifyContent: "center",
    textAlign: "center", */
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
};

const MTable = (props) => {
  const [data, setData] = useState([]);
  const [errorHandler, setErrorHandler] = useState(false);
  const [supportNumberChange, setSupportNumberChange] = useState(false);
  /* const [supportedController, setSupportedController] = useState(false); */
  useEffect(() => {
    /* if (props.filter !== "") { */
    getData();
    //}
  }, [props.searched, supportNumberChange]);

  useEffect(() => {
    if (props.searched === "") {
      getFilter();
    }
  }, [props.filter, supportNumberChange]);

  /*   useEffect(() => {
    setData(data);
  }, [supportNumberChange]); */

  const getFilter = () => {
    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/ranking/findSectorOrder",
      {
        params: {
          sector: props.filter,
        },
      }
    )
      .then((response) => {
        console.log(response);
        setData(response.data.demandsFiltered);
      })
      .catch((response) => {
        console.log(response.error);
      });
  };

  const getData = () => {
    Axios.get("https://backendjuntosifpb.herokuapp.com/ranking/search", {
      params: {
        querySearch: props.searched,
      },
    })
      .then((response) => {
        if (response.data !== "There are no queries found") {
          setErrorHandler(false);
          setData(response.data.demandsFiltered);
        } else {
          setErrorHandler(true);
        }
      })
      .catch((response) => {
        console.log(response.error);
      });
  };

  /* const supportedHandlerController = (event) => {
    console.log("event", event);
    setSupportedController(event);
  }; */

  const onSupportHandler = (event) => {
    //console.log(event.target.value);
    Axios.put(
      `https://backendjuntosifpb.herokuapp.com/demands/support/${event.target.value}`
    )
      .then((response) => {
        /* supportedHandlerController(!supportedController); */
        setSupportNumberChange(!supportNumberChange);
      })
      .catch((response) => {
        console.log(response.error);
      });
  };

  return (
    <div data-testid="m-table">
      <Paper>
        <Box className={classes2.table}>
          <TableContainer /* component={Paper} */ sx={sx.tableContainer}>
            {errorHandler ? (
              <Typography
                sx={{
                  minWidth: "968px",
                  textAlign: "center",
                  /* paddingTop: "50px", */
                  justifyContent: "center",
                  /* background: "blue", */
                }}
                variant="h5"
              >
                Não foi encontrada nenhuma demanda
              </Typography>
            ) : (
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
                  {data.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>
                        <Grid container>
                          <Grid item lg={2}>
                            <Avatar
                              sx={sx.avatar}
                              alt={row.user.name}
                              src="."
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <Typography sx={sx.name}>
                              {row.isAnonymous ? "Anônimo" : row.user.name}
                            </Typography>
                            <Typography color="textSecondary" variant="body2">
                              {row.isAnonymous ? "" : row.user.email}
                            </Typography>
                            <Typography color="textSecondary" variant="body2">
                              {row.name}
                            </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={sx.tableCell}>{row.title}</TableCell>

                      <TableCell sx={sx.tableCell}>{row.sector}</TableCell>

                      <TableCell sx={sx.tableCell}>
                        {row.createdAt.split(" ")[0]}
                      </TableCell>
                      <TableCell sx={sx.tableCell}>
                        <Typography
                          sx={sx.status}
                          style={{
                            backgroundColor:
                              (row.status === "Resolvido" && "green") ||
                              (row.status === "Não Resolvido" && "red") ||
                              (row.status === "Em Análise" && "#B8860B") ||
                              (row.status === "Em Validação" && "#556B2F") ||
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
                            style={{ width: "15px", borderRadius: "8px" }}
                            onClick={onSupportHandler}
                            value={row._id}
                          >
                            Apoiar
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TableContainer>
        </Box>
      </Paper>
    </div>
  );
};

export default MTable;
