import React, { useState } from "react";
import Button from "../Button";

import login from "../../assets/img/user__icon.png";

function Login() {
  const userExists = true;

  const goToLogin = (e) => {
    e.preventDefault();
  };
  const goToCreateAccount = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {userExists ? (
        <Button
          icon={login}
          loginIcon
          onClick={goToLogin}
          className="login-icon-wrapper"
        />
      ) : (
        <Button buttonTitle="Create Account" onClick={goToCreateAccount} />
      )}
    </>
  );
}

export default Login;
