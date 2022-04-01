import {
  Box,
} from "@mui/material";
import React from "react";
import Account from "../Pages/Account";
import Security from "./SecurityCard";
import { Link } from "react-router-dom";

import UserBar from "./UserBar";
import UserCard from "./UserCard";

import {
  Card,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LayoutUserPage from "../template/LayoutUserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ranking from "../Pages/Ranking";
const LoggedPage = () => {
  
  return (
    <div data-testid="logged-page">
     
      <Account/>
      
      {/* <Link to={"/seguranca"}/> */}
      {/* <Account/> */}
    
    </div>
  );
};

export default LoggedPage;
