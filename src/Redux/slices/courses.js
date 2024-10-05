import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCoursesStatus",
  async () => {
    const res = await axios.get(
      "https://mohammadjavad-sp.github.io/courses-api/db.json"
    );
    return res.data;
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: { allCourses: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload.courses;
    });
  },
});
