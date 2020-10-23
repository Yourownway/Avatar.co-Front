import React, { useEffect, useReducer } from "react";
// import AuthContext from "./component/Context/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./component/Context/ContextProvider";
// import AuthReducer from "./component/reducer/reducer";
import axios from "axios";
import { useUserUpdate } from "./component/Context/ContextProvider";

import "./App.css";

import routesAuth from "./component/Config/routesAuth";

const initialState = {
  isAuthenticated: false,
  user: null || localStorage.getItem("user"),

  token: null || localStorage.getItem("token"),
};

const reducer = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGNIN":
      console.log("SINGIN", action);
      localStorage.setItem("token", action.payload.data.Token);
      localStorage.setItem("user", action.payload.data);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.Token,
        user: action.payload.data,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case "LOAD_USER":
      console.log("LOAD_USER", state);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.data,
      };
    default:
      return state;
  }
};
export const AuthContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AuthContext.Provider
        value={{ reducerState: state, reducerDispatch: dispatch }}
      >
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
