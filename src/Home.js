import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Gallery from "./Gallery.js";
import Whyus from "./Whyus.js";
import Contactus from "./Contactus.js";
import Footer from "./Footer.js";
import Marquee from "./components/Marquee.js";
import Lottie from "lottie-react";
import cont from "./img/cont-button.json";

const Home = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <div>
      <Outlet />

      <Nav />
      <Videopage />
      <Videopg2 />
      <Videopg3 />
      <Gallery />
      <Whyus />
      <Marquee />
      <Contactus />
      <Footer />
      <div className="fixed-button-1">
        <a
          href={`https://wa.me/918287804197?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie loop={true} animationData={cont} />
        </a>
      </div>

    </div>
  );
};

export default Home;
