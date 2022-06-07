import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";

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
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    }
  } catch {
    // ignore write errors
  }
};

const store = configureStore(
  {
    reducer: { authReducer },
    preloadedState: loadState(),
  },

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveState(store.getState()));

export default store;
