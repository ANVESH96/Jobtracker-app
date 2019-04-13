const initialstate = {
  authError: null
};
const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("logout_sucessful");
      return {
        ...state
      };
    case "LOGOUT_ERROR":
      console.log("logout_error");
      return {
        ...state
      };
    case "SIGNUP_SUCCESS":
      console.log("signup_success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_FAILED":
      console.log("signup_failed");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};
export default authReducer;
