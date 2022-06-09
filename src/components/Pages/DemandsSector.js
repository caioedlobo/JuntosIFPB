import React from "react";
import LayoutUserPage from "../template/LayoutUserPage";
import DemandsSectorCard from "../organisms/DemandsSectorCard";
const DemandsSector = () => {
  return (
    <div data-testid="demands-sector" style={{ width: "100%" }}>
      <LayoutUserPage>
        <DemandsSectorCard />
      </LayoutUserPage>
    </div>
  );
};

export default DemandsSector;
