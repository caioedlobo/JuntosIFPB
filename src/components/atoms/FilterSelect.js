import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterSelect = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

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
            <MenuItem value={10}>-</MenuItem>
            <MenuItem value={10}>Setor 1</MenuItem>
            <MenuItem value={20}>Setor 2</MenuItem>
            <MenuItem value={30}>Data de Solitação (Mais recentes)</MenuItem>
            <MenuItem value={30}>Data de Solitação (Mais antigos)</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default FilterSelect;
