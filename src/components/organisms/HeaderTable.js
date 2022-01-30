import React, { useState } from "react";
import classes from "./stylesheet/MTable.module.css";
import SearchBar from "material-ui-search-bar";
import FilterSelect from "../atoms/FilterSelect";
import MTable from "./MTable";

const HeaderTable = (props) => {
  const [rows, setRows] = useState(props.USERS);
  const [searched, setSearched] = useState("");
  /* const [selectedFilter, setSelectedFilter] = useState(""); */

  const requestSearch = (searchedVal) => {
    const filteredRows = props.USERS.filter((row) => {
      return row.job.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <div data-testid="header-table">
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
      <MTable />
    </div>
  );
};

export default HeaderTable;
