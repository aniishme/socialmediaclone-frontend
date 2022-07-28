import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { postReducer } from "./reducers/postReducer";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    if (state.authReducer.auth) {
      const serializedState = JSON.stringify(state.authReducer);
      localStorage.setItem("state", serializedState);
    }
  } catch {
    // ignore write errors
  }
};

const store = configureStore(
  {
    reducer: { authReducer: authReducer, postReducer: postReducer },
    preloadedState: { authReducer: loadState() },
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveState(store.getState()));

export default store;
