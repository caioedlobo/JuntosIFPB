import React, {useState} from 'react'
import Layout from '../template/Layout';
import classesCommon from "./stylesheet/Common.module.css";
import imageReset from "./../../assets/undraw_forgot_password_re_hxwm.svg";
import { Box, Button } from "@mui/material";
import ResetPasswordText from '../atoms/ResetPasswordText';
import Axios from "axios";

const Reset = () => {

  const [resetPassword, setResetPassword] = useState()
  const resetPasswordData = (e) => {
    setResetPassword(e)
  }
  return(
  <Layout>
  
  <Box sx={{display: "flex", flexDirection: "column", width: {sm:"560px", xs: "380px"}, height: "max-content",/*  padding: "28px 24px" */}}>
    <form
    data-testid='reset'
    className={`${classesCommon.form}`}
    onSubmit={(e) => {
      e.preventDefault()
      const token = (e.target.action.split("="))[1];
      console.log(token)
      Axios.post("https://backend-juntosifpb.herokuapp.com/auth/reset_password", {
          password: resetPassword,
          token: token
        })
        }}
    
    >
      <Box sx={{textAlign: "center", marginBottom: "15px", backgroundSize: 'contain', justifyContent: "center"}}>
      <img
          src={imageReset}
          alt="imageReset"
          style={{ width: "50%", marginTop: "15px" }}
        >

        </img>
        </Box>
        <div style={{lineHeight: "1.5" }}>
          Digite sua nova senha para resetá-la:
        </div>
        <ResetPasswordText handlePasswordData={resetPasswordData}/>

        <Box sx={{width: "70%", marginBottom: "30px"}}>
        <Button type="submit" >Enviar</Button>
        </Box>
    
    </form>
    </Box>
  
  </Layout>
  )
}

export default Reset