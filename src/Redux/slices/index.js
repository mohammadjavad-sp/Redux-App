import { combineSlices } from "@reduxjs/toolkit";
import { globalsSlice } from "./globals";
import { coursesSlice } from "./courses";
import { filterSlice } from "./filter";
import { cartSlice } from "./cart";
import { articlesSlice } from "./articles";
import { loginSlice } from "./login";


const rootReducer = combineSlices(globalsSlice,coursesSlice,filterSlice,cartSlice,articlesSlice,loginSlice)

export default rootReducer