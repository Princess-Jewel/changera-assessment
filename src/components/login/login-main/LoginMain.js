import React from "react";
import "./LoginMain.css";

const LoginMain = () => {
  return (
    <div className="login__home">
      <div className="login__home__section">
        <h3>Hi! Welcome</h3>
        <a
          className="login__home__button"
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
        >
          Login With Github
        </a>
      </div>
    </div>
  );
};

export default LoginMain;
