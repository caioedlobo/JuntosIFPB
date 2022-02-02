import MTable from "./MTable";
import faker from "faker";
import React, { useState, useEffect } from "react";
import classes from "./stylesheet/MTable.module.css";
import SearchBar from "material-ui-search-bar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const STATUSES = [
  "Em validação",
  "Em análise",
  "Não atribuído",
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

const TableComponent = (props) => {
  const [searched, setSearched] = useState("");
  const [filter, setFilter] = useState("");
  const [rows, setRows] = useState(USERS);

  const isDateFilter = filter === "Recentes" || filter === "Antigos";
  const jobMatchFilter = (row, type) => row.job.match(RegExp(type, "i"));
  const getFilters = (filter) =>
    sortTable([...USERS], filter)
      .filter((row) => isDateFilter || jobMatchFilter(row, filter))
      .filter((row) => jobMatchFilter(row, searched));

  const onCancelSearchHandler = () => {
    setSearched("");
  };

  const onFilterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setRows(getFilters(filter));
  }, [filter, searched]);

  return (
    <div data-testid="table-component" className={classes.table}>
      <div className={classes.searchFilter}>
        <div data-testid="filter-select" className={classes.searchWrapper}>
          <SearchBar
            className={classes.searchBar}
            label="Pesquisar"
            value={searched}
            onChange={(searchVal) => setSearched(searchVal)}
            onCancelSearch={onCancelSearchHandler}
          />

          <FormControl size="small" style={{ width: "10%" }}>
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
              <MenuItem value={"Manutenção"}>Manutenção</MenuItem>
              <MenuItem value={"Coordenação"}>Coordenação</MenuItem>
              <MenuItem value={"Limpeza"}>Limpeza</MenuItem>
              <MenuItem value={"Recentes"}>
                Data de Solitação (Mais recentes)
              </MenuItem>
              <MenuItem value={"Antigos"}>
                Data de Solitação (Mais antigos)
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <MTable rows={rows} />
      </div>
    </div>
  );
};

export default TableComponent;
