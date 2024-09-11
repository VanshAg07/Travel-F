import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Contactus from "./Contactus.js";
import Cont from "./Cont.js";
import International from "./International.js";
import National from "./National.js";
import Glry from "./Glry.js";
import AdminPortal from "./components/dmin/AdminPortal.js";
import Blog from "./components/Blog.js";
import Blogdetails from "./components/Blogdetails.js";
import Places from "./components/Places.js";
import Hiking from "./components/Hiking.js";
import Visit from "./components/Visit.js";
import Food from "./components/Food.js";
import Shop from "./components/Shop.js";
import Packagedetails from "./components/Packagedetails.js";
import Dropnav from "./components/Dropnav.js";
import Review from "./components/Review.js";
import Honeymoon from "./components/Honeymoon.js";
import Faq from "./components/Faq.js";
// import Mobcrd from "./components/Mobcrd.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin" element={<AdminPortal />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Glry" element={<Glry />} />
        <Route path="/Cont" element={<Cont />} />
        <Route path="/intern" element={<International />} />
        <Route path="/National" element={<National />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Hiking" element={<Hiking />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Dropnav" element={<Dropnav />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Packagedetails" element={<Packagedetails />} />
        <Route path="/Honeymoon" element={<Honeymoon />} />
        <Route path="/blogdetails/:blogId" element={<Blogdetails />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/place/:id" element={<Places />} />
        <Route path="/Packagedetails/:name" element={<Packagedetails />} />
        <Route path="/trip/:tripName/:name" element={<Packagedetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
