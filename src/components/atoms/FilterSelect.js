import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterHandler from "./FilterHandler";
import MTable from "../organisms/MTable";
import classes from "../organisms/stylesheet/MTable.module.css";
import { maxWidth } from "@mui/system";

const FilterSelect = (props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  console.log(filter);
  /* console.log(selectedFilter); */

  const filteredRows = props.USERS.filter((row) => {
    return row.job.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(filteredRows);

  if (filter === "None") {
    props.searchedRows = props.USERS; // se marcar None no filtro
  }
  return (
    <div data-testid="filter-select">
      <FormControl style={{ width: "10%" }}>
        <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={""}>Nenhum</MenuItem>
          <MenuItem value={"Forward"}>Setor 1</MenuItem>
          <MenuItem value={"Product"}>Setor 2</MenuItem>
          <MenuItem value={"Customer"}>
            Data de Solitação (Mais recentes)
          </MenuItem>
          <MenuItem value={"Antigos"}>
            Data de Solitação (Mais antigos)
          </MenuItem>
        </Select>
      </FormControl>

      <MTable
        USERS={props.USERS}
        rows={filter !== "" ? filteredRows : props.searchedRows}
        filteredSearch={filter}
      />
    </div>
  );
};

export default FilterSelect;
