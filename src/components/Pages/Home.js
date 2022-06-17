import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Description from "../atoms/Description";
import classes from "./stylesheet/Home.module.css";
import LogoImg from "../atoms/LogoImg";
import classesCommon from "./stylesheet/Common.module.css";
import Layout from "../template/Layout";
import LoginFormHandler from "../atoms/LoginFormHandler";
import { useAuth } from "../providers/auth";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
 
  useEffect(() => {
    Axios.get("https://backendjuntosifpb.herokuapp.com/admin/isAdmin/", {
      adminId: localStorage.getItem("userId"),
    },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      }
    )
    .then((res) => {
      console.log("entrou")
      setIsLoggedIn(true);
      navigate("/");
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div data-testid="home">

      <Layout>
        <Box
          
          sx={{ 
            padding: {sm:"0 48px"}, 
            display: "flex", 
            flexDirection: {lg:"row"}, 
            alignItems: "center", 
            
            
          }}
        >
         
          <Box 
          sx={{
            display: {sm:"flex", xs: "none"}, 
            flexDirection: {lg:"row", sm:"column"}, 
            /* background: "cyan", */
            justifyContent: "center",
            alignItems: "center",
            marginRight: {lg: "0px", md:"70px"}
            
            
            
            }}>
             <Box 
             sx={{
               display:"flex",
                width: {xl:"310px", sm:"310px"}, 
                justifyContent: "center", 
                /* background: "blue", */
                
                }}>
              <Description />
             </Box> 

            <Box sx={{ padding: "30px 30px", width: {xl: "700px", lg: "500px", sm:"450px"}, display: {md: "flex", xs:"none"} }}>
              <LogoImg/>
              </Box>
          </Box>
          
            <div item className={`${classesCommon.form} ${classes.formHome}`}>
              <LoginFormHandler />
            </div>
            </Box>
          
        
      </Layout>
      {/* ) : navigate("/")} */}
    </div>
  );
};

export default Home;
