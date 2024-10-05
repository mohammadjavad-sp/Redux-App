import { createSlice } from "@reduxjs/toolkit";

export const globalsSlice = createSlice({
  name: "globals",
  initialState: {
    offCanvas: false,
    darkMode: false,
  },
  reducers: {
    openOffCanvas: (state, action) => {
      state.offCanvas = true;
    },
    closeOffCanvas: (state, action) => {
      state.offCanvas = false;
    },
    toggleDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { openOffCanvas, closeOffCanvas, toggleDarkMode } =
  globalsSlice.actions;
