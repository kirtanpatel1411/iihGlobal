import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import Courses from "../pages/Courses";
import CoursesShow from "../pages/CoursesShow";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="CoursesShow/:id" element={<CoursesShow />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
export default RoutesComponent;
