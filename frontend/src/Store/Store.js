import CoursesReducer from "../redux/CoursesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    Courses: CoursesReducer,
  },
});
