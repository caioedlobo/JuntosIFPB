import React from "react";
import Navbar from "../atoms/Navbar";
import TableComponent from "../organisms/TableComponent";

const Ranking = () => {
  return (
    <div data-testid="ranking">
      <header>
        <Navbar color="primary" />
      </header>
      <div style={{ paddingTop: "100px" }}>
        <TableComponent style={{ paddingTop: "100px" }} />
      </div>
    </div>
  );
};

export default Ranking;
