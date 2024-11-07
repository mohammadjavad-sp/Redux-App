import { createSlice } from "@reduxjs/toolkit";
import { t } from "i18next";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterModal: false,
    sortModal: false,
    sortName: t("sorts.allCourses"),
  },
  reducers: {
    openFilterModal: (state) => {
      state.filterModal = !state.filterModal;
    },
    openSortModal: (state) => {
      state.sortModal = !state.sortModal;
    },
    closeSortModal: (state) => {
      state.sortModal = false;
    },
    setSortName: (state, action) => {
      state.sortName = action.payload;
    },
  },
});

export const { openFilterModal, openSortModal, setSortName, closeSortModal } =
  filterSlice.actions;
