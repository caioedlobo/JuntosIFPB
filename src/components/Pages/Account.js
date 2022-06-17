import React, { useEffect} from "react";
import UserCard from "../organisms/UserCard";
import LayoutUserPage from "../template/LayoutUserPage";
import Axios from "axios";
import { useOutsourced } from "../providers/outsourced";

const Account = () => {
  const {setIsOutsourced} = useOutsourced();

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


  return (
    <div data-testid="account">
      <LayoutUserPage isOutsourced={true}>
        <UserCard />
      </LayoutUserPage>
    </div>
  );
};

export default Account;
