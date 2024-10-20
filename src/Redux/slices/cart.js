import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { addedToCart: 0, addedCourses: [], total: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.addedToCart += 1;
      state.addedCourses.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const updateAddedCourses = state.addedCourses.filter(
        (course) => course.id !== action.payload.id
      );
      state.addedCourses = updateAddedCourses;
      state.addedToCart -= 1;
      state.total -= action.payload.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
