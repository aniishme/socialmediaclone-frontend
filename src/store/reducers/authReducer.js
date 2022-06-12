import * as authActionTypes from "../actions/auth/authTypes";

const initialState = {
  token: "",
  loading: false,
  message: "",
  auth: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        auth: true,
        message: "Login Success",
        user: action.user,
      };
    case authActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        message: action.message,
      };

    default:
      return state;
  }
};
