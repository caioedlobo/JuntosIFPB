import React, {useState} from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios"
import NameText from "./NameText";
import completeImage from "../../assets/undraw_completing_re_i7ap.svg";

const RegisterForm = (props) => {

  const [nameFormData, setNameFormData] = useState()
  const [emailFormData, setEmailFormData] = useState()
  const [passwordFormData, setPasswordFormData] = useState()
  const [successScreen, setSuccessScreen] = useState(false)

  const [errorEmailController, setErrorEmailController] = useState(false)
  const [errorEmailMessage, setErrorEmailMessage] = useState("")
  let [previousEmail, setPreviousEmail] = useState("")

  const [errorPasswordController, setErrorPasswordController] = useState(false)
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("")
  let [previousPassword, setPreviousPassword] = useState("")
  

  const emailLoginData = (e) => {
    setEmailFormData(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
  };

  const nameLoginData = (e) => {
    setNameFormData(e)
  };

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    
    if (regEx.test(emailFormData)){
      if( emailFormData.includes('@')){
        if(emailFormData.split('@')[1] === "academico.ifpb.edu.br" ){
          return true
        }
        else if(emailFormData.split('@')[1] === "ifpb.edu.br" ){
          return true
        }
        else{
          console.log("erro else 0")
          errorControllerHandler("Email inválido")
          return false
        }
      }
      else{
        console.log("erro else 1")
        errorControllerHandler("Email inválido")
        return false
      }
      
    }
    else if (!regEx.test(emailFormData) && emailFormData !== ""){
      console.log("erro else if")
      errorControllerHandler("Email inválido")
      return false
    }
    else{
      console.log("erro else 2")
      errorControllerHandler("Email inválido")
      return false
    }
  }
  

  const errorControllerHandler = (e) => {
    if(e === "Invalid password"){
      setErrorPasswordController(true)
      setErrorPasswordMessage(e)
      setPreviousPassword(passwordFormData)
    }
    else{
    setErrorEmailController(true)
    setErrorEmailMessage(e)
    setPreviousEmail(emailFormData)
    }
  }

  
  const emailErrorHandler = (e) => {
    setPreviousEmail("")
    if (previousEmail === e){
    setErrorEmailController(true)

    }
    else{
      setErrorEmailController(false)
      setErrorEmailMessage("")
    }
    
  }

  const passwordErrorHandler = (e) => {
    setPreviousPassword("")
    if (previousPassword === e){
    setErrorPasswordController(true)

    }
    else{
      setErrorPasswordController(false)
      setErrorPasswordMessage("")
    }
    
  }
  
  return (
    <form
      data-testid="register-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        width: "300px",
        /* background: "blue", */
        justifyContent: "center"
      }}
     onSubmit={(e) => {
       console.log("1")
       e.preventDefault();
      
       if (emailValidation()){
         console.log("teste")
        Axios.post("https://backendjuntosifpb.herokuapp.com/auth/register", {
          name: nameFormData,
          email: emailFormData,
          password: passwordFormData, 
        })
        .then((response) => {
          setSuccessScreen(true)
          console.log(successScreen)
          console.log(response.error)}
          )

        .catch(error => {
          console.log(successScreen)
          console.log("error:", error.response.data.error)
          errorControllerHandler(error.response.data.error)
      })

     }}
    }
    >
      <ImageLogin />

    {!successScreen ?
     <>
       <NameText nameLoginData={nameLoginData}/>
      <LoginText 
      emailLoginData={emailLoginData}
      errorEmailMessage={errorEmailMessage} 
      errorEmail={errorEmailController} 
      errorEmailController={emailErrorHandler}
      />
      <PasswordText 
      passwordLoginData={passwordLoginData} 
      errorPasswordMessage={errorPasswordMessage} 
      errorPassword={errorPasswordController} 
      errorPasswordController={passwordErrorHandler}
      label={"Digite a senha"}/>
      
      <HeightFormHandler />
      <Button type="submit"> Registrar </Button>
      
      <HeightFormHandler />
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerRegister}>
        Já possui conta? Entre
      </Button>
       
       </>
       : 
       <>
       <p style={{marginTop: "25px"}}>Sua conta foi cadastrada com sucesso. Verifique seu email para verificar sua conta.</p>
       <img src={completeImage} alt="complete image" style={{width: "180px", marginBottom: "15px"}}></img>
       <Button  onClick={props.FormHandlerRegister}>
        Voltar para o login
      </Button>
       </>
      }
    
    </form>
  );
};

export default RegisterForm;
