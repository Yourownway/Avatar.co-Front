import React, {  } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function PrivateRoutes({ component: Component, ...rest }) {
  const { state } = (AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}