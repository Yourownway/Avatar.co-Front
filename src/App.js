import React, { useEffect, useReducer } from "react";
import AuthContext from "./component/Context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider, useUser } from "./component/Context/ContextProvider";
import AuthReducer from "./component/reducer/reducer";
import axios from "axios";
import { useUserUpdate } from "./component/Context/ContextProvider";

import "./App.css";

import routesAuth from "./component/Config/routesAuth";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

function App() {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const authValue = {
    state,
    dispatch,
  };
  const updateUser = useUserUpdate();
  const userData = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        const res = await axios(`/api/load/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("resULT", res);
        updateUser(res.data);
        console.log("userValue!!", useUser);
        dispatch({
          type: "LOAD_USER",
          payload: res,
        });
      }
    };
    fetchUser();
  });

  return (
    <>
      <AuthContext.Provider value={authValue}>
        <ContextProvider>
          <Router>
            <Switch>
              {routesAuth.map((route) => (
                <Route
                  exact={route.exact}
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </Router>
        </ContextProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
