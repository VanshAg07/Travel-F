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

import AdminPortal from "./components/dmin/AdminPortal.js"
import Blog from "./components/Blog.js";
import Blogdetails from "./components/Blogdetails.js";
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
        <Route path="/blogdetails/:blogId" element={<Blogdetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

