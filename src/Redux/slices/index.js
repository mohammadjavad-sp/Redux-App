import { combineSlices } from "@reduxjs/toolkit";
import { globalsSlice } from "./globals";
import { coursesSlice } from "./courses";
import { filterSlice } from "./filter";


const rootReducer = combineSlices(globalsSlice,coursesSlice,filterSlice)

export default rootReducer