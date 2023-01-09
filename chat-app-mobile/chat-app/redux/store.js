import { configureStore } from "@reduxjs/toolkit";
import global from './slices/globalSlice';
import chat from './slices/chat'
const rootReducer = {
  global,
  chat,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
