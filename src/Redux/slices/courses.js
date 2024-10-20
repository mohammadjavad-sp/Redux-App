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

export const fetchCoursesBySearch = createAsyncThunk(
  "courses/fetchCoursesBySearch",
  async () => {
    const res = await axios.get(
      "https://mohammadjavad-sp.github.io/courses-api/db.json"
    );
    return res.data;
  }
);

export const fetchPreSaleCourses = createAsyncThunk(
  "courses/fetchPreSaleCourses",
  async () => {
    const res = await axios.get(
      "https://mohammadjavad-sp.github.io/courses-api/db.json"
    );
    return res.data;
  }
);

export const fetchCoursesByCategory = createAsyncThunk(
  "courses/fetchCoursesByCategory",
  async () => {
    const res = await axios.get(
      "https://mohammadjavad-sp.github.io/courses-api/db.json"
    );
    return res.data;
  }
);

export const fetchCoursesBySort = createAsyncThunk(
  "courses/fetchCoursesBySort",
  async () => {
    const res = await axios.get(
      "https://mohammadjavad-sp.github.io/courses-api/db.json"
    );
    return res.data;
  }
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState: { allCourses: [], coursesBySearch: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload;
    });
    builder.addCase(fetchCoursesBySearch.fulfilled, (state, action) => {
      const searchedCourses = action.payload.filter(
        (items) =>
          items.courseName.toLowerCase().includes(action.meta.arg) ||
          items.description.includes(action.meta.arg)
      );
      state.allCourses = searchedCourses;
    });
    builder.addCase(fetchPreSaleCourses.fulfilled, (state, action) => {
      const preSaleCourses = action.payload.filter(
        (items) => items.courseStatus == "پیش فروش"
      );
      state.allCourses = preSaleCourses;
    });
    builder.addCase(fetchCoursesByCategory.fulfilled, (state, action) => {
      if (action.meta.arg == "همه دوره ها") {
        state.allCourses = action.payload;
      } else if (action.meta.arg == "فرانت اند") {
        const frontCourses = action.payload.filter(
          (items) => items.category == "frontend"
        );
        state.allCourses = frontCourses;
      } else if (action.meta.arg == "پایتون") {
        const backCourses = action.payload.filter(
          (items) => items.category == "python"
        );
        state.allCourses = backCourses;
      }
    });

    builder.addCase(fetchCoursesBySort.fulfilled, (state, action) => {
      if (action.meta.arg == "همه دوره ها") {
        state.allCourses = action.payload;
      } else if (action.meta.arg == "ارزان ترین") {
        const cheapest = action.payload.sort((a, b) => a.price - b.price);
        state.allCourses = cheapest;
      } else if (action.meta.arg == "گران ترین") {
        const expensive = action.payload.sort((a, b) => b.price - a.price);
        state.allCourses = expensive;
      }
    });
  },
});
