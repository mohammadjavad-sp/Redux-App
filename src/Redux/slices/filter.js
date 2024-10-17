import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { filterModal: false, sortModal: false },
  reducers: {
    openFilterModal: (state, action) => {
      state.filterModal = !state.filterModal;
    },
    openSortModal: (state, action) => {
      state.sortModal = !state.sortModal;
    },
  },
});

export const { openFilterModal, openSortModal } = filterSlice.actions;
