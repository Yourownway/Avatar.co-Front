import React, { useReducer } from "react"
import Test from "./test"
const initialState = {
  isAuthenticated: "false",
}
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      // localStorage.setItem("token", action.payload.Token);

      return {
        ...state,
        isAuthenticated: "true",
        // token: action.payload.Token,
        // user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: "false",
      }
    case "YES":
      console.log(state)
      return {
        ...state,
        isAuthenticated: "YES",
      }
    default:
      return state
  }
}
export const AuthContext = React.createContext()
export default function App2() {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  return (
    <AuthContext.Provider
      value={{ reducerState: state, reducerDispatch: dispatch }}
    >
      <div>
        <Test />
        <h2>hello {state.isAuthenticated} </h2>
      </div>
    </AuthContext.Provider>
  )
}
