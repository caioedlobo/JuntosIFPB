import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterHandler from "./FilterHandler";

const FilterSelect = (props) => {
  const [filter, setFilter] = useState("None");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  console.log(filter);
  /* console.log(selectedFilter); */

  return (
    <div data-testid="filter-select">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={"None"}>Nenhum</MenuItem>
            <MenuItem value={"Setor 1"}>Setor 1</MenuItem>
            <MenuItem value={"Setor 2"}>Setor 2</MenuItem>
            <MenuItem value={"Recentes"}>
              Data de Solitação (Mais recentes)
            </MenuItem>
            <MenuItem value={"Antigos"}>
              Data de Solitação (Mais antigos)
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default FilterSelect;
