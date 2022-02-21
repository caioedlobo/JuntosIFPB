import React from "react";
import Navbar from "../atoms/Navbar";
import TableComponent from "../organisms/TableComponent";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Ranking.module.css";

const Ranking = () => {
  return (
    <div
      data-testid="ranking"
      className={`${classesCommon.background} ${classes.rankingBackground}`}
    >
      <header>
        <Navbar />
      </header>

      <div className={`${classesCommon.form} ${classes.formRanking}`}>
        <TableComponent />
      </div>
    </div>
  );
};

export default Ranking;
