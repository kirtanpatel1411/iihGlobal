import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  courses: [],
  loading: false,
  error: null,
  SelectedCourse: null,
};

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    selectCourse(state, action) {
      state.SelectedCourse = action.payload;
    },
  },
});

export const { selectCourse } = CoursesSlice.actions;
export default CoursesSlice.reducer;
