import React from "react";
import TableComponent from "../organisms/TableComponent";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Ranking.module.css";
import Layout from "../template/Layout";

const Ranking = () => {
  return (
    <Layout>
      <div
        className={`${classesCommon.form} ${classes.formRanking}`}
        data-testid="ranking"
      >
        <TableComponent />
      </div>
    </Layout>
  );
};

export default Ranking;
