import React, { useState, useEffect } from "react";
import { Card, Typography, Box, Alert, Stack, Snackbar } from "@mui/material";
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
      /* maxHeight: "800px", */
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
  const [statuses, setStatuses] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [listSectors, setListSectors] = useState([]);
  const [listStatuses, setListStatuses] = useState([]);


  useEffect(() => {

    Axios.post(
      "https://backendjuntosifpb.herokuapp.com/outsourced/outsourcedSector/",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    )
      .then((response) => {
        setData(response.data.demands);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    Axios.get("https://backendjuntosifpb.herokuapp.com/sector/listAllSectors",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      }
    ).then((response) => {
      setListSectors(response.data.ok.map((item) => item.title));

    })
      .catch((err) => {
        console.log(err)
      })
  }, [data]);

  useEffect(() => {
    Axios.get("https://backendjuntosifpb.herokuapp.com/ranking/getStatuses",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      }
    ).then((response) => {
      console.log(response)
      setListStatuses(response.data.statuses.map((item) => item.title));

    })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  console.log(data)
  console.log(listStatuses)
  console.log(listSectors)



  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const updateStatus = () => {
    setPostController(true);
    let newData = [];

    for (let i = 0; i < statuses.length; i++) {

      if (statuses[i] !== undefined) {
        newData = [...newData, { id: statuses[i]?.id, status: statuses[i]?.value }];
      }
      if (sectors[i] !== undefined) {
        newData = [...newData, { id: sectors[i]?.id, sector: sectors[i]?.value }];
      }
    }
    console.log(newData)
    Axios.put("https://backendjuntosifpb.herokuapp.com/demands/updateDemand", {
      demands: newData,
    },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setPostController(false);
        /* setStatuses([]); */
        setOpen(true);
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
                <TableContainer sx={sx.tableContainer}>
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
                        {data.map((row, index) => (
                          <TableRow key={row.name}>
                            <TableCell sx={sx.tableCell}>{row.title}</TableCell>

                            <TableCell sx={sx.tableCell}>

                              <FormControl sx={{ width: "130px" }}>
                                <InputLabel id="demo-simple-select-label">
                                  Setor
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={sectors[index]?.value ?? row.sector}  //?. se for undefined, é falso e vai para row.status
                                  label="Sector"
                                  onChange={(event) => {
                                    setSectors(prevState => {
                                      const newSectors = [...prevState];
                                      newSectors[index] = {
                                        id: row._id,
                                        value: event.target.value,
                                      };
                                      return newSectors;
                                    })
                                  }}
                                >

                                  {listSectors.map((sector) => (
                                    <MenuItem value={sector}>
                                      {sector}
                                    </MenuItem>
                                  ))}

                                </Select>
                              </FormControl>
                            </TableCell>

                            <TableCell sx={sx.tableCell}>
                              <FormControl sx={{ width: "130px" }}>
                                <InputLabel id="demo-simple-select-label">
                                  Status
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  /* value={row.status} */
                                  value={statuses[index]?.value ?? row.status}  //?. se for undefined, é falso e vai para row.status
                                  label="Status"
                                  onChange={(event) => {
                                    setStatuses(prevState => {
                                      const newStatuses = [...prevState];
                                      newStatuses[index] = {
                                        id: row._id,
                                        value: event.target.value,
                                      };
                                      return newStatuses;
                                    })
                                  }}
                                >
                                  
                                  {listStatuses.map((status) => (
                                  <MenuItem value={status}>
                                    {status}
                                  </MenuItem>
                                  )
                                  )}
                                 
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
                marginTop: "50px",
                width: "70%",
              }}
              onClick={updateStatus}
              loading={postController}
              disabled={statuses.length > 0 || sectors.length > 0 ? false : true}
            >
              Salvar
            </LoadingButton>

            <Stack spacing={2} sx={{ width: '100%' }}>
              <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Status da demanda alterado com sucesso!
                </Alert>
              </Snackbar>
            </Stack>
          </Box>
        </Card>


      </Box>

    </div>
  );
};

export default DemandsSectorCard;
