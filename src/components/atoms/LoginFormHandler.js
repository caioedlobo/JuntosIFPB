import { React, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import CpfForm from "../molecules/CpfForm";

const LoginFormHandler = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isForgotPasswordForm, setIsForgotPasswordForm] = useState(false);
  const [isCpfForm, setIsCpfForm] = useState(false);
  const FormHandler = () => {
    setIsLoginForm(!isLoginForm);
    setIsCpfForm(!isCpfForm);
  };
  const FormHandlerLogin = () => {
    setIsLoginForm(true);
    setIsCpfForm(false);
  };
  const FormCpfHandler = () => {
    setIsLoginForm(false);
    setIsCpfForm(!isCpfForm);
  };
  const FormHandlerForgotPassword = () => {
    /* setIsLoginForm(!isLoginForm); */
    setIsForgotPasswordForm(!isForgotPasswordForm);
    /* console.log(isForgotPasswordForm); */
  };

  /* const changeToLoggedScreen = () => {
    console.log("clicou");
  }; */

  if (isForgotPasswordForm) {
    /* console.log(isForgotPasswordForm); */
    return (
      <div data-testid="login-form-handler">
        <ForgotPasswordForm FormHandlerPassword={FormHandlerForgotPassword} />
      </div>
    );
  } else if (isCpfForm) {
    /* console.log(isForgotPasswordForm); */
    return (
      <div data-testid="login-form-handler">
        <CpfForm
          FormHandlerRegister={FormHandlerLogin}
          CpfHandler={FormCpfHandler}
        />
      </div>
    );
  } else if (isLoginForm) {
    return (
      <div data-testid="login-form-handler">
        <LoginForm
          FormHandlerRegister={FormHandler}
          FormHandlerPassword={FormHandlerForgotPassword}
          /* SendLogin={changeToLoggedScreen} testeteste*/
        />
      </div>
    );
  } else if (!isLoginForm) {
    return (
      <div data-testid="login-form-handler">
        <RegisterForm FormHandlerRegister={FormHandlerLogin} />
      </div>
    );
  }

  /* if (isLoginForm && !isForgotPasswordForm) {
    return (
      <div data-testid="login-form-handler"> */

  /* {isLoginForm ? (
        <LoginForm FormHandlerRegister={FormHandler} />
      ) : isForgotPasswordForm ? (
        <ForgotPasswordForm FormHandlerPassword={FormHandlerForgotPassword} />
      ) : (
        <RegisterForm FormHandlerRegister={FormHandler} />
      )} */

  /* {<RegisterForm />}
      </div>
    ); */
};

export default LoginFormHandler;
