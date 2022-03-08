import React from "react";
import TableComponent from "../organisms/TableComponent";
import classesCommon from "./stylesheet/Common.module.css";
import classes from "./stylesheet/Ranking.module.css";
import Layout from "../template/Layout";
import FloatRankingButton from "../atoms/FloatRankingButton";

const Ranking = () => {
  return (
    <Layout>
      <div
        className={`${classesCommon.form} ${classes.formRanking}`}
        data-testid="ranking"
      >
        <TableComponent />
      </div>

      <FloatRankingButton />
    </Layout>
  );
};

export default Ranking;
