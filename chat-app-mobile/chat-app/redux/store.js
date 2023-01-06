import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  global,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
