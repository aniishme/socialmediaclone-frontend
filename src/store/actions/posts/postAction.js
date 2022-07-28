import axios from "axios";
import toast from "react-hot-toast";
import * as postTypes from "./postTypes";

export const createPostHandler = (data) => {
  return async (dispatch) => {
    try {
      console.log("I am here");
      dispatch({
        type: postTypes.POST_SAVE,
      });
      if (data) {
        const res = await axios.post(
          "http://localhost:8000/posts/create-post",
          data
        );
        if (res.status === 201) {
          console.log(res);
          toast.success("Posted Successfully");
          dispatch({
            type: postTypes.POST_SUCCESS,
            post: data,
          });
        }
      }
    } catch (error) {
      dispatch({
        type: postTypes.POST_ERROR,
      });
    }
  };
};

export const getPostHandler = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: postTypes.GET_POST,
      });
      const res = await axios.get("http://localhost:8000/posts/");
      console.log(res.data);
      dispatch({
        type: postTypes.GET_POST_SUCCESS,
        post: await res.data,
      });
    } catch (error) {
      dispatch({
        type: postTypes.POST_ERROR,
      });
    }
  };
};
