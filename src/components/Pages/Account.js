import React, { useEffect, useState } from "react";
import UserCard from "../organisms/UserCard";
import LayoutUserPage from "../template/LayoutUserPage";
import Axios from "axios";

const Account = () => {
  const [demandSectorCard, setDemandSectorCard] = useState(false);

  useEffect(() => {
    Axios.post(
      "https://backendjuntosifpb.herokuapp.com/validateCpf/isOutsourced/",
      {
        id: localStorage.getItem("userId"),
      }
    )
      .then((res) => {
        setDemandSectorCard(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div data-testid="account">
      <LayoutUserPage isOutsourced={demandSectorCard}>
        <UserCard />
      </LayoutUserPage>
    </div>
  );
};

export default Account;
