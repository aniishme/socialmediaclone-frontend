import axios from "axios";
import toast from "react-hot-toast";
import * as authActionTypes from "./authTypes";

export const loginHandler = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: authActionTypes.LOGIN_START,
      });

      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Allow-Control-Allow-Origin": "*",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Login Success!!!");
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          token: res.data.token,
          user: res.data.acc,
        });
      }
    } catch (error) {
      toast.error(JSON.parse(error.request.response).message);
      dispatch({
        type: authActionTypes.LOGIN_ERROR,
        message: JSON.parse(error.request.response).message,
      });
    }
  };
};
