import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: { filterModal: false, sortModal: false, sortName: "" },
  reducers: {
    openFilterModal: (state, action) => {
      state.filterModal = !state.filterModal;
    },
    openSortModal: (state, action) => {
      state.sortModal = !state.sortModal;
    },
    setSortName: (state, action) => {
      if(action.payload == "ارزان ترین"){
        state.sortName = "ارزان ترین"
      }else if(action.payload == "گران ترین"){
        state.sortName = "گران ترین"
      }else{
        state.sortName = "همه دوره ها"
      }
    },
  },
});

export const { openFilterModal, openSortModal, setSortName } =
  filterSlice.actions;
