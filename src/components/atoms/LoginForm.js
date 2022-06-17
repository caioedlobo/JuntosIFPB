import React, { useState } from "react";
import { Button } from "@mui/material";
import LoginText from "./LoginText";
import PasswordText from "./PasswordText";
import ImageLogin from "./ImageLogin";
import HeightFormHandler from "./HeightFormHandler";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuth } from "../providers/auth";

const LoginForm = (props) => {

  const {setIsLoggedIn} = useAuth();

  const [emailFormData, setEmailFormData] = useState();
  const [passwordFormData, setPasswordFormData] = useState();

  const [errorEmailController, setErrorEmailController] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  let [previousEmail, setPreviousEmail] = useState("");

  const [errorPasswordController, setErrorPasswordController] = useState(false);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
  let [previousPassword, setPreviousPassword] = useState("");

  const navigate = useNavigate();
  const [postController, setpostController] = useState(false);
  const [disabledButtonController, setDisabledButtonController] =
    useState(false);

  const emailLoginData = (e) => {
    setEmailFormData(e);
  };

  const passwordLoginData = (e) => {
    setPasswordFormData(e);
  };

  const errorControllerHandler = (e) => {
    if (e === "Invalid password") {
      setErrorPasswordController(true);
      setErrorPasswordMessage(e);
      setPreviousPassword(passwordFormData);
    } else {
      setErrorEmailController(true);
      setErrorEmailMessage(e);
      setPreviousEmail(emailFormData);
    }
  };

  const emailErrorHandler = (e) => {
    setPreviousEmail("");
    if (previousEmail === e) {
      setErrorEmailController(true);
    } else {
      setErrorEmailController(false);
      setErrorEmailMessage("");
    }
  };

  const passwordErrorHandler = (e) => {
    setPreviousPassword("");
    if (previousPassword === e) {
      setErrorPasswordController(true);
    } else {
      setErrorPasswordController(false);
      setErrorPasswordMessage("");
    }
  };

  return (
    <form
      data-testid="login-form"
      style={{
        alignItems: "center",
        flexDirection: "column",
        display: "flex",

        width: "300px",
      }}
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        setDisabledButtonController(true);
        setpostController(true);
        const token = e.target.action.split("=")[1];
        const outsourcedId = e.target.action.split("=")[2];

        Axios.post(
          "https://backendjuntosifpb.herokuapp.com/auth/authenticate",
          {
            email: emailFormData,
            password: passwordFormData,
            token: token,
            outsourcedId: outsourcedId,
          }
        )
          .then((response) => {
            setpostController(false);
            setDisabledButtonController(false);
            const accessToken = response.data.token;
            const userId = response.data.user._id;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("userId", userId);
            localStorage.setItem("isLoggedIn", true);
            setIsLoggedIn(true);
            navigate("/conta");
          })
          .catch((error) => {
            setpostController(false);
            setDisabledButtonController(false);
            errorControllerHandler(error.response.data.error);
          });
      }}
    >
      <ImageLogin />

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
        label={"Digite a senha"}
      />
      <HeightFormHandler />

      <LoadingButton
        loading={postController}
        type="submit"
        disabled={disabledButtonController}
      >
        Entrar
      </LoadingButton>
      <HeightFormHandler />
      <Button
        sx={{ backgroundColor: "transparent" }}
        onClick={props.FormHandlerRegister}
      >
        Não possui conta? Registre-se
      </Button>
      <Button
        sx={{ backgroundColor: "transparent" }}
        onClick={props.FormHandlerPassword}
      >
        Esqueceu sua senha? Clique aqui
      </Button>
    </form>
  );
};

export default LoginForm;
