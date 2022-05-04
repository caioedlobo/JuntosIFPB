import React from "react";
import ContributionsCard from "../organisms/ContributionsCard";
import LayoutUserPage from "../template/LayoutUserPage";
const Contributions = () => {
  return (
    <div data-testid="contributions">
      <LayoutUserPage>
        <ContributionsCard />
      </LayoutUserPage>
    </div>
  );
};

export default Contributions;
