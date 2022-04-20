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

  function hex_to_ascii(str1)
 {
	const hex  = str1.toString();
	let str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
  

  return(
  <Layout>
  
  <Box sx={{display: "flex", flexDirection: "column", width: {sm:"560px", xs: "380px"}, height: "max-content",/*  padding: "28px 24px" */}}>
    <form
    data-testid='reset'
    className={`${classesCommon.form}`}
    onSubmit={(e) => {
      e.preventDefault()
      
      const email = (e.target.action.split("="))[2];
      const token = (e.target.action.split("="))[1];
      /* console.log(hex_to_ascii(email)) */
      Axios.post("https://backendjuntosifpb.herokuapp.com/auth/reset_password", {
          email: hex_to_ascii(email),
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
        <ResetPasswordText passwordData={resetPasswordData}/>

        <Box sx={{width: "70%", marginBottom: "30px"}}>
        <Button type="submit" >Enviar</Button>
        </Box>
    
    </form>
    </Box>
  
  </Layout>
  )
}

export default Reset