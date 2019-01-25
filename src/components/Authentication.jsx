import React from "react";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";

import { CurrentUserContext } from "../providers/CurrentUserProvider";

const Authentication = ({ loading }) => {
  if (loading) return null;

  return (
    <CurrentUserContext.Consumer>
      {user => (user ? <CurrentUser {...user} /> : <SignInAndSignUp />)}
    </CurrentUserContext.Consumer>
  );
};

export default Authentication;
