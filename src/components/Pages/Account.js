import React, { useEffect } from "react";
import UserCard from "../organisms/UserCard";
import LayoutUserPage from "../template/LayoutUserPage";
import Axios from "axios";
import { useOutsourced } from "../providers/outsourced";
import { useAuth } from "../providers/auth";

const Account = () => {
  const { setIsOutsourced } = useOutsourced();
  const { setIsAdmin } = useAuth();
  useEffect(() => {

    Axios.post(
      "https://backendjuntosifpb.herokuapp.com/validateCpf/isOutsourced/",
      {
        id: localStorage.getItem("userId"),
      }
    )
      .then((res) => {
        setIsOutsourced(true);

      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    Axios.get(
      "https://backendjuntosifpb.herokuapp.com/admin/isAdmin/",
      { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } }
    )
      .then((response) => {
        console.log("entrou")
        setIsAdmin(response.data.ok);

      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div data-testid="account">
      <LayoutUserPage isOutsourced={true}>
        <UserCard />
      </LayoutUserPage>
    </div>
  );
};

export default Account;
