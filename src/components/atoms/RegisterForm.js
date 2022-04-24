import React, {useState, useEffect} from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios"
import NameText from "./NameText";
import completeImage from "../../assets/undraw_completing_re_i7ap.svg";
import debounce from "lodash.debounce";
import LoadingButton from '@mui/lab/LoadingButton';

const RegisterForm = (props) => {

  const [nameFormData, setNameFormData] = useState("")
  const [emailFormData, setEmailFormData] = useState("")
  const [passwordFormData, setPasswordFormData] = useState("")
  const [successScreen, setSuccessScreen] = useState(false)


  const [errorNameController, setErrorNameController] = useState(false)
  const [errorNameMessage, setErrorNameMessage] = useState(" ")

  const [errorEmailController, setErrorEmailController] = useState(false)
  const [errorEmailMessage, setErrorEmailMessage] = useState(" ")
  //let [previousEmail, setPreviousEmail] = useState("")

  const [errorPasswordController, setErrorPasswordController] = useState(false)
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(" ")
  //let [previousPassword, setPreviousPassword] = useState("")

  const [disabledButtonController, setDisabledButtonController] = useState(true)
  const [postController, setpostController] = useState(false)

  useEffect(() => {
    if(nameFormData.length > 1 && emailFormData.length > 0 && passwordFormData.length > 0){
      if (!errorNameController && !errorEmailController && !errorPasswordController){
        setDisabledButtonController(false)
      }
      else{
        setDisabledButtonController(true)
      }
    }
    else{
      setDisabledButtonController(true)
    }
  }, [errorNameController, errorEmailController, errorPasswordController])

 
  const nameLoginData = (e) => {
    setNameFormData(e)
    nameValidation(e)
  };

  const emailLoginData = (e) => {
    //console.log("entrando")
    setEmailFormData(e)
    emailValidation(e)
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e)
    passwordValidation(e)
  };



  const nameValidation = (nameDataValidation) => {
    //console.log("entrou nameValidation")
    if (nameDataValidation.length > 1){
      //console.log("nome valido")
      setErrorNameController(false)
      setErrorNameMessage(" ")
      return true
    }
    setErrorNameController(true)
    setErrorNameMessage("Nome Inválido")
    setDisabledButtonController(true)
    return false
  }

  const emailValidation = (emailDataValidation) => {
    //console.log("entrou emailValidation")
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    //console.log("emailFormData", emailDataValidation)
    //if (regEx.test(emailDataValidation)){
      if( emailDataValidation.includes('@')){
        if(emailDataValidation.split('@')[1] === "academico.ifpb.edu.br" ){
          //console.log("entrou 1")
          errorControllerHandler("Válido")
          //console.log("foooii")
          //setButtonController(false)
          return true
        }
        else if(emailDataValidation.split('@')[1] === "ifpb.edu.br" ){
          //console.log("entrou 2")
          errorControllerHandler("Válido")
          //setButtonController(false)
          return true
          
        }
        else{
          //console.log("erro else 0")
          errorControllerHandler("Email inválido")
          setDisabledButtonController(true)
          //setButtonController(false)
          return false
        }
      }
      else{
        //console.log("erro else 1")
        //setButtonController(false)
        errorControllerHandler("Email inválido")
        setDisabledButtonController(true)
        return false
      }
      
    //}
    /* else */ if (!regEx.test(emailFormData) && emailFormData !== ""){
      //console.log("erro else if")
      errorControllerHandler("Email inválido")
      setDisabledButtonController(true)
      return false
    }
    else{
      //console.log("erro else 2")
      errorControllerHandler("Email inválido")
      setDisabledButtonController(true)
      return false
    }
  }

  const passwordValidation = async(passwordDataValidation) => {
    if (passwordDataValidation.length < 6){
      await new Promise((resolve) => setTimeout(resolve, 1000))
      errorControllerHandler("Senha muito curta")
      setDisabledButtonController(true)
      return false

    }
    //await new Promise((resolve) => setTimeout(resolve, 1000))
    setErrorPasswordController(false)
    setErrorPasswordMessage(" ")
    return true
      
  }
  

  const errorControllerHandler = (e) => {
    //console.log(e)
    if(e === "Invalid password"){
      setDisabledButtonController(true)
      setErrorPasswordController(true)
      setErrorPasswordMessage(e)
      //setPreviousPassword(passwordFormData)
    }

    else if (e === "Válido"){
      
      setErrorEmailController(false)
      setErrorEmailMessage(" ")
    
    }

    else if (e === "Senha muito curta"){
      setDisabledButtonController(true)
      console.log("entrooouuu")
      setErrorPasswordController(true)
      setErrorPasswordMessage(e)
      
    
    }
    else{
      setDisabledButtonController(true)
      setErrorEmailController(true)
      setErrorEmailMessage(e)
      //setPreviousEmail(emailFormData)
    }
  }
  
  //console.log(emailFormData)
  
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
       //console.log("1")
       e.preventDefault();
       setDisabledButtonController(true)
        setpostController(true)
       if (nameValidation(nameFormData) && emailValidation(emailFormData) && passwordValidation(passwordFormData)){ 
         //console.log("teste")
        Axios.post("https://backendjuntosifpb.herokuapp.com/auth/register", {
          name: nameFormData,
          email: emailFormData,
          password: passwordFormData, 
        })
        .then((response) => {
          setSuccessScreen(true)
          console.log(successScreen)
          console.log(response.error)
          setpostController(false)
        }
          
          )

        .catch(error => {
          console.log(successScreen)
          console.log("error:", error.response.data.error)
          errorControllerHandler(error.response.data.error)
          setpostController(false)
      })

     }
    }
    }
    >
      <ImageLogin />

    {!successScreen ?
     <>
       <NameText 
       nameLoginData={nameLoginData}
       errorNameMessage={errorNameMessage} 
       errorName={errorNameController}
       />
      <LoginText 
      emailLoginData={emailLoginData}
      errorEmailMessage={errorEmailMessage} 
      errorEmail={errorEmailController}
      data={emailFormData}
      //registerButtonHandler={registerButtonHandler}
      //errorEmailController={emailErrorHandler}
      />
      <PasswordText 
      passwordLoginData={passwordLoginData} 
      errorPasswordMessage={errorPasswordMessage} 
      errorPassword={errorPasswordController} 
      //errorPasswordController={passwordErrorHandler}
      label={"Digite a senha"}/>
      
      <HeightFormHandler />
      <LoadingButton loading={postController} type="submit" disabled={disabledButtonController}> Registrar </LoadingButton>
      
      <HeightFormHandler />
      <Button sx={{backgroundColor:"transparent"}} onClick={props.FormHandlerRegister}>
        Já possui conta? Entre
      </Button>
      
       </>
       : 
       <>
       <p style={{marginTop: "25px"}}>Sua conta foi cadastrada com sucesso. Confira seu email para verificar sua conta.</p>
       <img src={completeImage} alt="complete" style={{width: "170px", marginBottom: "15px"}}></img>
       <Button  onClick={props.FormHandlerRegister} style={{marginTop: "15px"}}>
        Voltar para o login
      </Button>
      
       </>
      }
    
    </form>
  );
};

export default RegisterForm;
