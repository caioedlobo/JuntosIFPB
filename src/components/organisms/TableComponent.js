import MTable from "./MTable";
import faker from "faker";
import React, { useState } from "react";
import classes from "./stylesheet/MTable.module.css";
import SearchBar from "material-ui-search-bar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { height } from "@mui/system";
let USERS = [];
let STATUSES = [
  "Em validação",
  "Em análise",
  "Não atribuído",
  "Resolvido",
  "Não Resolvido",
];
let AREAS = ["Manutenção", "Coordenação", "Limpeza", "Administração"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    job: AREAS[Math.floor(Math.random() * AREAS.length)],
    joinDate: faker.date.past().toLocaleDateString("pt-BR"),
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    support: faker.random.number({ min: 0, max: 20 }),
  };
}

function sortTable(arr, prop) {
  arr.sort(function (a, b) {
    if (prop === "recent") {
      let dayA = "";
      let dayB = "";
      let monthA = "";
      let monthB = "";
      let yearA = "";
      let yearB = "";
      for (let i = 0; i < 2; i++) {
        dayA += a.joinDate[i];
        dayB += b.joinDate[i];
      }
      for (let i = 3; i < 5; i++) {
        monthA += a.joinDate[i];
        monthB += b.joinDate[i];
      }
      for (let i = 6; i < 10; i++) {
        yearA += a.joinDate[i];
        yearB += b.joinDate[i];
      }

      const dateA = yearA + monthA + dayA;
      const dateB = yearB + monthB + dayB;

      if (parseInt(dateA) >= parseInt(dateB)) {
        return -1;
      }
      if (parseInt(dateB) > parseInt(dateA)) {
        return 1;
      }
    } else {
      //sort by section
      if (parseInt(a[prop]) > parseInt(b[prop])) {
        return -1;
      } else if (parseInt(a[prop]) < parseInt(b[prop])) {
        return 1;
      } else {
        return 0;
      }
    }
  });
}

sortTable(USERS, "support");
/* sortTable(USERS, "joinDate"); */

const TableComponent = (props) => {
  const [searched, setSearched] = useState("");
  const [filter, setFilter] = useState("");
  /* const [dateFilter, setDateFilter] = useState(""); */

  const onCancelSearchHandler = () => {
    setSearched("");
  };

  const onFilterChangeHandler = (event) => {
    console.log(event.target.value);
    sortTable(USERS, event.target.value);
    setFilter(event.target.value);
  };

  // RegExp é equivalente a row.job.toLowerCase().includes(filter.toLowerCase())
  const getFilters = () =>
    USERS.filter((row) =>
      row.job.match(RegExp(filter !== "" ? filter : searched, "i"))
    );

  return (
    <div data-testid="table-component" className={classes.table}>
      <div className={classes.searchFilter}>
        <div data-testid="filter-select" className={classes.searchWrapper}>
          <SearchBar
            className={classes.searchBar}
            label="Pesquisar"
            value={searched}
            onChange={(searchVal) => setSearched(searchVal)}
            onCancelSearch={() => onCancelSearchHandler()}
          />

          <FormControl
            size="small"
            style={{ width: "10%", backgroundColor: "white" }}
          >
            <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
            <Select
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
              <MenuItem value={"recent"}>
                Data de Solitação (Mais recentes)
              </MenuItem>
              <MenuItem value={"oldest"}>
                Data de Solitação (Mais antigos)
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <MTable rows={getFilters()} />
      </div>
    </div>
  );
};

export default TableComponent;
