import React from "react";
import Button from "@material-ui/core/Button";
import classes from "../organisms/stylesheet/MTable.module.css";
const FilterButton = () => {
  return (
    <div data-testid="filter-button" /*  style={{ width: "10px" }} */>
      <Button
        className={classes.filterButton}
        style={{
          backgroundColor: "pink",
          width: "120px",
          height: "45px",
          color: "white",
          backgroundColor: "#3fa14c",
          borderRadius: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Filtro
      </Button>
    </div>
  );
};

export default FilterButton;