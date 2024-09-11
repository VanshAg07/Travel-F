import React from "react";
import "./Home.css";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Videopg4 from "./components/Videopg4.js";
import Gallery from "./Gallery.js";
import Whyus from "./Whyus.js";
import Contactus from "./Contactus.js";
import Footer from "./Footer.js";
import Marquee from "./components/Marquee.js";
import Lottie from "lottie-react";
import cont from "./img/cont-button.json";
import PhoneFooter from "./components/PhoneFooter.js";
import { useMediaQuery } from 'react-responsive';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Review from "./components/Review.js";



const Home = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";

  // Use media query to check if screen width is 425px or less
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    
    <div className="home-wr">
    <GoogleOAuthProvider clientId="296927192780-60h36sne2alsb0pnhm89kbnt4pst0eqk.apps.googleusercontent.com">


      <Nav />
      {/* <Dashboard /> */}
      <Videopage />
      <Videopg2 />
      <Videopg3 />
      <Gallery />
      <Videopg4 />
      <Whyus />
      <Review />
      <div className="marquee-wrapper">
        <Marquee />
      </div>
      <Contactus />

      <Footer /> 
      {isMobile && <PhoneFooter />} 
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
      </GoogleOAuthProvider>
     
    </div>
  );
};

export default Home;

