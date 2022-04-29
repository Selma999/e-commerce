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
    <div>
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
    </div>
  );
}

export default Login;
