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
import LinearProgress from "@mui/material/LinearProgress";

const sx = {
  table: {
    minWidth: "968px",
  },
  tableContainer: {
    borderRadius: "5px",
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
  const [supportedController, setSupportedController] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  useEffect(() => {
    /* if (props.filter !== "") { */

    Axios.get("https://backendjuntosifpb.herokuapp.com/ranking/search", {
      params: {
        querySearch: props.searched,
      },
    })
      .then((response) => {
        setLoadingAnimation(false);
        if (response.data !== "Não foram encontradas consultas") {
          setErrorHandler(false);
          setData(response.data.demandsFiltered);
        } else {
          setErrorHandler(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //}
  }, [props.searched, supportNumberChange, supportedController]);

  useEffect(() => {
    //if (props.searched === "") {
    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/ranking/findSectorOrder",
      {
        params: {
          sector: props.filter,
        },
      }
    )
      .then((response) => {
        //console.log(response);
        setData(response.data.demandsFiltered);
        if (response.data.demandsFiltered.length === 0) {
          setErrorHandler(true);
        } else {
          setErrorHandler(false);
        }
      })
      .catch((response) => {
        console.log(response.error);
      });
    //}
  }, [props.filter, supportNumberChange, supportedController]);

  const onSupportHandler = async (event) => {
    Axios.put(
      `https://backendjuntosifpb.herokuapp.com/demands/support/${event.target.value}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    )
      .then((response) => {
        setSupportedController(!supportedController);
        setSupportNumberChange(!supportNumberChange);
      })
      .catch((response) => {
        console.log(response.error);
      });
  };

  return (
    <div data-testid="m-table">
      <Paper elevation={0}>
        <Box className={classes2.table}>
          <TableContainer /* component={Paper} */ sx={sx.tableContainer}>
            {console.log(errorHandler)}
            {errorHandler ? (
              <Typography
                sx={{
                  minWidth: "968px",
                  textAlign: "center",

                  justifyContent: "center",
                }}
                variant="h5"
              >
                Não foi encontrada nenhuma demanda
              </Typography>
            ) : data.length === 0 ? (
              <Typography
                sx={{
                  minWidth: "968px",
                  textAlign: "center",

                  justifyContent: "center",
                }}
                variant="h5"
              >
                Pesquisando demandas...
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
                            {/* <Typography color="textSecondary" variant="body2">
                              {row.name}
                            </Typography> */}
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={sx.tableCell}>{row.title}</TableCell>

                      <TableCell sx={sx.tableCell}>{row.sector}</TableCell>

                      <TableCell sx={sx.tableCell}>{row.dateGMT}</TableCell>
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
                          {row.supportUsers.includes(
                            localStorage.getItem("userId")
                          ) ? (
                            <Button
                              variant="outlined"
                              size="small"
                              style={{
                                maxWidth: "90px",
                                maxHeight: "30px",
                                minWidth: "90px",
                                minHeight: "30px",
                                borderRadius: "8px",
                                background:
                                  "linear-gradient(to bottom right, #204E11, #2F5A22)",
                              }}
                              onClick={onSupportHandler}
                              value={row._id}
                            >
                              Desapoiar
                            </Button>
                          ) : (
                            <Button
                              variant="outlined"
                              size="small"
                              style={{
                                maxWidth: "90px",
                                maxHeight: "30px",
                                minWidth: "90px",
                                minHeight: "30px",
                                borderRadius: "8px",
                              }}
                              onClick={onSupportHandler}
                              value={row._id}
                            >
                              Apoiar
                            </Button>
                          )}
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
      {loadingAnimation ? (
        <LinearProgress color="success" style={{ width: "100%" }} />
      ) : null}
    </div>
  );
};

export default MTable;
