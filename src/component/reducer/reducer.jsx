const AuthReducer = (state, action) => {
  console.log("ICI ACTION :", action);
  switch (action.type) {
    case "SIGN_IN":
      localStorage.setItem("token", action.payload.Token);
      console.log('SIGN_IN OK ')
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

export default AuthReducer