import React from "react";
import Navbar from "../components/UI/Navbar";
import MTable from "../organisms/MTable";

const Ranking = () => {
  return (
    <>
      <header>
        <Navbar color="primary" />
      </header>
      <div style={{ paddingTop: "100px" }}>
        <MTable style={{ paddingTop: "100px" }} options={{ filtering: true }} />
      </div>
    </>
  );
};

export default Ranking;
