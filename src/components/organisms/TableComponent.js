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
    support: faker.random.number({ min: 0, max: 20 }),
  };
}

function sortTable(arr, prop) {
  arr.sort(function (a, b) {
    if (parseInt(a[prop]) > parseInt(b[prop])) {
      return -1;
    } else if (parseInt(a[prop]) < parseInt(b[prop])) {
      return 1;
    } else {
      return 0;
    }
  });
}

sortTable(USERS, "support");

const TableComponent = (props) => {
  const [rows, setRows] = useState(USERS);
  const [searched, setSearched] = useState("");
  /* const [selectedFilter, setSelectedFilter] = useState(""); */

  const requestSearch = (searchedVal) => {
    /* const orderedRows = USERS.filter((row) => {
      return row.support.sort();
    }); */

    /* console.log("ordered", orderedRows); */

    const filteredRows = USERS.filter((row) => {
      return row.job.toLowerCase().includes(searchedVal.toLowerCase());
    });
    /* const orderedRows = sort.(filteredRows(a, b) {return b-a}); */
    /*     const orderedRows = USERS.filter((row) => {
      return sortOn(filteredRows, "support");
    });

    console.log("testew", orderedRows); */
    console.log("filtered", filteredRows);
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  /* console.log(rows); */
  return (
    <div data-testid="table-component" className={classes.table}>
      <div className={classes.searchFilter}>
        <SearchBar
          className={classes.searchBar}
          label="Teste"
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

        {/* <FilterButton></FilterButton> */}
        <FilterSelect
          selectedFilter={props.filter}
          USERS={USERS}
          searchedRows={rows}
        ></FilterSelect>
      </div>
      {/* <MTable USERS={USERS} rows={rows} /> */}
    </div>
  );
};

export default TableComponent;
