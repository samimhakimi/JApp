import { authConstants } from "../constants/authConstants";

const initialState = {
  isAuthenticating: false,
  isAuthenticated: true,
  error: "",
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_LOADING:
      return {
        ...state,
        isAuthenticating: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error || "Something went wrong",
      };
    case authConstants.REGISTER_LOADING:
      return {
        ...state,
        isAuthenticating: true,
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,

        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload,
      };
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error || "Something went wrong",
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: "",
      };
    default:
      return { ...state };
  }
};
export default authReducer;
