import * as postTypes from "../actions/posts/postTypes";

const initialState = {
  posts: [],
  user: null,
  loading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.POST_SAVE:
      return {
        ...state,
        loading: true,
      };
    case postTypes.POST_SUCCESS:
      const newPosts = state.posts.concat(action.post);
      return {
        ...state,
        posts: newPosts,
        loading: false,
      };

    case postTypes.GET_POST_SUCCESS:
      return {
        ...state,
        posts: [...action.post],
        loading: false,
      };
    case postTypes.POST_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
