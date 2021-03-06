import MTable from "./MTable";
import faker from "faker";
import React, { useState, useEffect } from "react";
import classes from "./stylesheet/MTable.module.css";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import debounce from "lodash.debounce";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Axios from "axios";

const STATUSES = [
  "Em Validação",
  "Em Análise",
  "Não Atribuído",
  "Resolvido",
  "Não Resolvido",
];
const JOBS = ["Manutenção", "Coordenação", "Limpeza", "Administração"];
const USERS = Array.from({ length: 14 }).map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  job: JOBS[Math.floor(Math.random() * JOBS.length)],
  recent: faker.date.past().toLocaleDateString("pt-BR"),
  status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  support: faker.random.number({ min: 0, max: 20 }),
}));

const getDateTime = (date) => {
  const [day, month, year] = date.split("/");
  return new Date(year, month - 1, day).getTime();
};

function sortTable(arr, prop) {
  return arr.sort(function (currentValue, nextValue) {
    switch (prop) {
      case "Recentes":
        return getDateTime(currentValue.recent) >= getDateTime(nextValue.recent)
          ? -1
          : 1;

      case "Antigos":
        return getDateTime(currentValue.recent) < getDateTime(nextValue.recent)
          ? -1
          : 1;

      default:
        //section
        return +currentValue.support > +nextValue.support ? -1 : 1;
    }
  });
}

const TableComponent = () => {
  const [searched, setSearched] = useState("");
  const [filter, setFilter] = useState("");
  const [rows, setRows] = useState(USERS);

  const jobMatchFilter = (row, type) => row.job.match(RegExp(type, "i"));

  const onFilterChangeHandler = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };
  const onSearchHandler = (event) => {
    setSearched(event.target.value);
  };

  const debouncedChangeHandler = (event) => {
    debounce(onSearchHandler(event), 200);
  };

  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const isDateFilter = filter === "Recentes" || filter === "Antigos";
    const getFilters = (filter) =>
      sortTable([...USERS], filter)
        .filter((row) => isDateFilter || jobMatchFilter(row, filter))
        .filter((row) => jobMatchFilter(row, searched));
    setRows(getFilters(filter));
  }, [filter, searched]);

  useEffect(() => {
    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/sector/listAllSectors",
      {}
    )
      .then((res) => {
        setSectors(res.data.ok);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div data-testid="table-component" className={classes.table}>
      <div className={classes.searchFilter}>
        <div data-testid="filter-select" className={classes.searchWrapper}>
          <TextField
            style={{ marginTop: "10px" }}
            onChange={debouncedChangeHandler}
            className={classes.searchBar}
            label="Pesquise demandas..."
            /* value={searched} */
            /* onCancelSearch={onCancelSearchHandler} */
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl size="small" style={{ width: "10%", marginTop: "10px" }}>
            <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filter"
              onChange={onFilterChangeHandler}
            >
              <MenuItem value={""}>Nenhum</MenuItem>
              {sectors.map((sector) => (
                <MenuItem value={sector.title}>{sector.title}</MenuItem>
              ))}
              {/* <MenuItem value={"Manutenção"}>Manutenção2</MenuItem>
              <MenuItem value={"Coordenação"}>Coordenação</MenuItem>
              <MenuItem value={"Limpeza"}>Limpeza</MenuItem> */}
              <MenuItem value={"Recentes"}>
                Data de Solicitação (Mais recentes)
              </MenuItem>
              <MenuItem value={"Antigos"}>
                Data de Solicitação (Mais antigos)
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <MTable rows={rows} searched={searched} filter={filter} />
      </div>
    </div>
  );
};

export default TableComponent;
