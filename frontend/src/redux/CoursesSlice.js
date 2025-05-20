import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.png";
import img23 from "../assets/img23.png";
import img24 from "../assets/img24.png";
import img25 from "../assets/img25.png";

export const fetchCourses = createAsyncThunk(
  "Courses/fetchCourses",
  async () => {
    const response = await new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: "1",
              coursname: "Web Design Fundamentals",
              description:
                "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
              img1: img11,
              img2: img12,
              img3: img13,
              week: "4 weeks",
              level: "Beginner",
              name: "By John Smith",
              number: [
                { id: "01", text: "Introduction to HTML" },
                { id: "02", text: "Styling with CSS" },
                { id: "03", text: "Introduction to Responsive Design" },
                { id: "04", text: "Design Principles for Web" },
                { id: "05", text: "Building a Basic Website" },
              ],
            },
            {
              id: "2",
              coursname: "UI/UX Design",
              description:
                "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
              img1: img14,
              img2: img15,
              img3: img16,
              week: "6 weeks",
              level: "Intermediate",
              name: "By Emily Johnson",
              number: [
                { id: "01", text: "Introduction to UI/UX Design" },
                { id: "02", text: "User Research and Personas" },
                { id: "03", text: "Wireframing and Prototyping" },
                { id: "04", text: "Visual Design and Branding" },
                { id: "05", text: "Usability Testing and Iteration" },
              ],
            },
            {
              id: "3",
              coursname: "Mobile App Development",
              description:
                "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
              img1: img17,
              img2: img18,
              img3: img19,
              week: "8 weeks",
              level: "Intermediate",
              name: "By David Brown",
              number: [
                { id: "01", text: "Usability Testing and Iteration" },
                { id: "02", text: "Fundamentals of Swift Programming (iOS)" },
                {
                  id: "03",
                  text: "Fundamentals of Kotlin Programming (Android)",
                },
                { id: "04", text: "Building User Interfaces" },
                { id: "05", text: "App Deployment and Testing" },
              ],
            },
            {
              id: "4",
              coursname: "Graphic Design for Beginners",
              description:
                "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
              img1: img20,
              img2: img21,
              img3: img22,
              week: "10 weeks",
              level: "Beginner",
              name: "By Sarah Thompson",
              number: [
                { id: "01", text: "Introduction to Graphic Design" },
                { id: "02", text: "Typography and Color Theory" },
                { id: "03", text: "Layout Design and Composition" },
                { id: "04", text: "Image Editing and Manipulation" },
                { id: "05", text: "Designing for Print and Digital Media" },
              ],
            },
            {
              id: "5",
              coursname: "Front-End Web Development",
              description:
                "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
              img1: img23,
              img2: img24,
              img3: img25,

              week: "10 weeks",
              level: "Intermediate",
              name: "By Michael Adams",
              number: [
                { id: "01", text: "HTML Fundamentals" },
                { id: "02", text: "CSS Styling and Layouts" },
                { id: "03", text: "JavaScript Basics" },
                { id: "04", text: "Building Responsive Websites" },
                { id: "05", text: "Introduction to Bootstrap and React" },
              ],
            },
            {
              id: "6",
              coursname: "Advanced JavaScript",
              description:
                "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
              img1: img15,
              img2: img16,
              img3: img17,

              week: "8 weeks",
              level: "Intermediate",
              name: "By Jennifer Wilson",
              number: [
                { id: "01", text: "HTML Fundamentals" },
                { id: "02", text: "CSS Styling and Layouts" },
                { id: "03", text: "JavaScript Basics" },
                { id: "04", text: "Building Responsive Websites" },
                { id: "05", text: "Introduction to Bootstrap and React" },
              ],
            },
          ]),
        1000
      )
    );
    return response;
  }
);

const initialState = {
  Courses: [],
  loading: false,
  error: null,
  SelectedCourse : null,
};

const CoursesSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {
        selectCourse(state, action) {
            state.SelectedCourse = action.payload;
        }


  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.Courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCourse  } = CoursesSlice.actions;
export default CoursesSlice.reducer;
