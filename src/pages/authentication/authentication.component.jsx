import React from "react";

import "./authentication.styles.scss";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const AuthenticationPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
