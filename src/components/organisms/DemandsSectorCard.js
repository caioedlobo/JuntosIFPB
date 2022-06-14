import React, { useState, useEffect } from "react";
import { Card, Typography, Box } from "@mui/material";
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

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LoadingButton } from "@mui/lab";

const DemandsSectorCard = () => {
  const sx = {
    table: {
      minWidth: "300px",
    },
    tableContainer: {
      borderRadius: "5px",
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

  const [data, setData] = useState([]);
  const [postController, setPostController] = useState(false);
  let [statuses, setStatuses] = useState([]);

  console.log(statuses);
  useEffect(() => {
    /* console.log(localStorage.gketItem("userId")); */
    //console.log(data);
    Axios.post(
      "https://backendjuntosifpb.herokuapp.com/outsourced/outsourcedSector/",
      { id: localStorage.getItem("userId") },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    )
      .then((response) => {
        setData(response.data.demands);
        /* console.log(response.data.demands); */
        for (let i = 0; i < response.data.demands.length; i++) {
          /* setStatuses([
            ...statuses,
            {
              id: response.data.demands[i]._id,
              status: response.data.demands[i].status,
            },
          ]); */
          setStatuses((statuses) => [
            ...statuses,
            {
              id: response.data.demands[i]._id,
              status: response.data.demands[i].status,
            },
          ]);
        }
      })
      .catch((response) => {
        console.log(response.error);
      });
  }, []);

  /* const handleChange = (event) => {}; */

  const updateStatus = () => {
    setPostController(true);
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      newData = [...newData, { id: data[i]._id, status: data[i].status }];
    }

    Axios.put("/demandStatus", {
      demands: newData,
    })
      .then((response) => {
        setPostController(false);
      })
      .catch((error) => {
        setPostController(false);
        console.log(error);
      });
  };

  return (
    <div data-testid="demands-sector-card">
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

              justifyContent: "flex-start",
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
              DEMANDAS DO SETOR
            </Typography>
            <Paper elevation={0} style={{ overflowX: "auto" }}>
              <Box className={classes2.table}>
                <TableContainer /* component={Paper} */ sx={sx.tableContainer}>
                  {data != null ? (
                    <Table sx={sx.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={sx.tableHeaderCell}>Demanda</TableCell>
                          <TableCell sx={sx.tableHeaderCell}>Setor</TableCell>

                          {/* <TableCell sx={sx.tableHeaderCell}>
                            Data de solicitação
                          </TableCell> */}
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

                            {/* <TableCell sx={sx.tableCell}>
                              {row.dateGMT}
                            </TableCell> */}
                            <TableCell sx={sx.tableCell}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                  Status
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  /* value={row.status} */
                                  value={row.status}
                                  label="Status"
                                  onChange={() => {
                                    row.status = "Tetse";
                                    console.log(row);
                                  }}
                                >
                                  <MenuItem value={"Atribuído"}>
                                    Atribuído
                                  </MenuItem>
                                  <MenuItem value={"Em Análise"}>
                                    Em Análise
                                  </MenuItem>
                                  <MenuItem value={"Não Resolvido"}>
                                    Não Resolvido
                                  </MenuItem>
                                  <MenuItem value={"Resolvido"}>
                                    Resolvido
                                  </MenuItem>
                                </Select>
                              </FormControl>
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
            <LoadingButton
              style={{
                marginTop: "200px",
                width: "70%",
              }}
              onClick={updateStatus}
              loading={postController}
            >
              Salvar
            </LoadingButton>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default DemandsSectorCard;
