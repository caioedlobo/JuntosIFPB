import React from "react";
import MTable from "./MTable";

const TableComponent = () => {
  return (
    <div data-testid="table-component">
      <HeaderTable />
      <MTable />
    </div>
  );
};

export default TableComponent;
