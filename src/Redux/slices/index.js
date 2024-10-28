import { combineSlices } from "@reduxjs/toolkit";
import { globalsSlice } from "./globals";
import { coursesSlice } from "./courses";
import { filterSlice } from "./filter";
import { cartSlice } from "./cart";
import { articlesSlice } from "./articles";


const rootReducer = combineSlices(globalsSlice,coursesSlice,filterSlice,cartSlice,articlesSlice)

export default rootReducer