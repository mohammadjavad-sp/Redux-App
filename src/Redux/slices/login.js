import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: !!Cookies.get("token"),
    user: Cookies.get("token") || null,
    picture: localStorage.getItem("userPicture") || null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.token;
      Cookies.set("token", action.payload.token, { expires: 10 });
      localStorage.setItem("userPicture", action.payload.picture);
      state.picture = action.payload.picture;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.picture = null;
      Cookies.remove("token");
      localStorage.removeItem("userPicture"); 
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;
