import { React, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const LoginFormHandler = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isForgotPasswordForm, setIsForgotPasswordForm] = useState(false);
  const FormHandler = () => {
    setIsLoginForm(!isLoginForm);
  };
  const FormHandlerForgotPassword = () => {
    /* setIsLoginForm(!isLoginForm); */
    setIsForgotPasswordForm(!isForgotPasswordForm);
    console.log(isForgotPasswordForm);
  };

  if (isForgotPasswordForm) {
    console.log(isForgotPasswordForm);
    return (
      <div data-testid="login-form-handler">
        <ForgotPasswordForm FormHandlerPassword={FormHandlerForgotPassword} />
      </div>
    );
  } else if (isLoginForm) {
    return (
      <div data-testid="login-form-handler">
        <LoginForm
          FormHandlerRegister={FormHandler}
          FormHandlerPassword={FormHandlerForgotPassword}
        />
      </div>
    );
  } else if (!isLoginForm) {
    return (
      <div data-testid="login-form-handler">
        <RegisterForm FormHandlerRegister={FormHandler} />
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
