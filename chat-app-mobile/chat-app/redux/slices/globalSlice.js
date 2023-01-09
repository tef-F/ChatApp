import { createSlice } from "@reduxjs/toolkit";

const KEY = "global";

const initialState = {
  isLoading: false,
  isLogin: false,
  modalVisible: false,
  currentUserId: "",
};

const globalSilice = createSlice({
  name: KEY,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },

  },
});


export const { setLoading, setLogin } = globalSilice.actions

export default globalSilice.reducer