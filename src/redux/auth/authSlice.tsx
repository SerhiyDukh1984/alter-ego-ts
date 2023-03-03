import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: null,
    password: null,
  },
  reducers: {
    loginUser(state, { payload }) {
      const { login, password } = payload;

      return { ...state, login, password };
    },
    logoutUser(state, { payload }) {
      const { login, password } = payload;
      return { ...state, login, password };
    },
  },
});

export default authSlice.reducer;
export const { loginUser, logoutUser } = authSlice.actions;
