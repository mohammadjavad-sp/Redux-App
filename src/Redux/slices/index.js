import { combineSlices } from "@reduxjs/toolkit";
import { globalsSlice } from "./globals";
import { coursesSlice } from "./courses";


const rootReducer = combineSlices(globalsSlice,coursesSlice)

export default rootReducer