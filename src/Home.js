import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Gallery from "./Gallery.js";
import Whyus from "./Whyus.js";
import Contactus from "./Contactus.js";
import Footer from "./Footer.js";
import Marquee from "./components/Marquee.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";

const Home = () => {
  return (
    <div>
      <Nav />
      <Videopage />
      <Videopg2/>
      <Videopg3 />
      <Gallery />
      <Whyus />
      <Marquee />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
