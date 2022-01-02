import React from "react";

import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ path, children }) {
  const isAuth  = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
}
