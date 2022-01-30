import MTable from "./MTable";
import faker from "faker";
import React, { useState } from "react";
import classes from "./stylesheet/MTable.module.css";
import SearchBar from "material-ui-search-bar";
import FilterSelect from "../atoms/FilterSelect";
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
const TableComponent = (props) => {
  const [rows, setRows] = useState(USERS);
  const [searched, setSearched] = useState("");
  /* const [selectedFilter, setSelectedFilter] = useState(""); */

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
  return (
    <div data-testid="table-component">
      <div className={classes.searchFilter}>
        <SearchBar
          className={classes.searchBar}
          label="Teste"
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

        {/* <FilterButton></FilterButton> */}
        <FilterSelect selectedFilter={props.filter}></FilterSelect>
      </div>
      <MTable USERS={USERS} rows={rows} />
    </div>
  );
};

export default TableComponent;