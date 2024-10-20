import { combineSlices } from "@reduxjs/toolkit";
import { globalsSlice } from "./globals";
import { coursesSlice } from "./courses";
import { filterSlice } from "./filter";
import { cartSlice } from "./cart";


const rootReducer = combineSlices(globalsSlice,coursesSlice,filterSlice,cartSlice)

export default rootReducer