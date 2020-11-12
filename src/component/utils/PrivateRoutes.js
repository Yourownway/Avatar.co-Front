import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function PrivateRoutes({ component: Component, ...rest }) {
  const authValue = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authValue.reducerState.isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}