import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import authReducer from "../features/authSlice";

const preloadedState = {
  auth: loadFromLocalStorage("auth") || undefined,
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage("auth", state.auth);
});

export default store;
