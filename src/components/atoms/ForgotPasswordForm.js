import React, { useState } from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios";

const ForgotPasswordForm = (props) => {

  const [emailForgotPasswordData, setEmailForgotPasswordData] = useState()

  function convertStringToHex(str) {
    
	const arr1 = [];
	for (let n = 0, l = str.length; n < l; n ++) 
     {
		const hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

  const emailForgotPassword = (e) => {
    setEmailForgotPasswordData(e)
  }
  return (
    <form
      data-testid="forgot-password-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        width:"300px"
      }}
      onSubmit={async (e) => {
        e.preventDefault();
        
        console.log(convertStringToHex(emailForgotPasswordData))
         await Axios.post(`https://backend-juntosifpb.herokuapp.com/auth/forgot_password`, {
          email: emailForgotPasswordData,
          
        })
        
      }
      }
    >
      <ImageLogin />
      <HeightFormHandler />
      <p /* style={{marginTop: "30px"}} */>	
        Insira seu e-mail para procurar a sua conta.
      </p>
      <LoginText emailLoginData={emailForgotPassword}/>

      <HeightFormHandler />
      <Button type="submit" >Enviar</Button>
      <HeightFormHandler />
      <Button onClick={props.FormHandlerPassword}>Voltar para o Login</Button>
    </form>
  );
};

export default ForgotPasswordForm;
