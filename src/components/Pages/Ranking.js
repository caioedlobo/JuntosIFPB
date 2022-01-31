import React from "react";
import Navbar from "../atoms/Navbar";
import TableComponent from "../organisms/TableComponent";

const Ranking = () => {
  return (
    <div data-testid="ranking">
      <header>
        <Navbar />
      </header>
      <div style={{ paddingTop: "105px" }}>
        <TableComponent />
      </div>
    </div>
  );
};

export default Ranking;
