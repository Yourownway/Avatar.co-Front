import React, { useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const AuthReducer = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("token", action.payload.Token);

      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.Token,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthContext = React.createContext();

const CountProvider = ({ children }) => {
  const contextValue = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};

const Counter = () => {
  const [count, dispatch] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "set", count: 0 })}>reset</button>
    </div>
  );
};

const Example05 = () => (
  <>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
  </>
);

export default Example05;
