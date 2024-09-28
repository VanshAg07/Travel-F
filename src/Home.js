import React from "react";
import "./Home.css";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Videopg4 from "./components/Videopg4.js";
import Gallery from "./Gallery.js";
import Whyuss from "./components/Whyuss.js";
import Contactus from "./Contactus.js";
import Footer from "./Footer.js";
import Marquee from "./components/Marquee.js";
import Lottie from "lottie-react";
import cont from "./img/cont-button.json";
import PhoneFooter from "./components/PhoneFooter.js";
import { useMediaQuery } from 'react-responsive';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Review from "./components/Review.js";
import Forms from "./components/Forms.js";
import Explore from "./components/Explore.js";
import FooterSection from "./components/Footersection.js";
import Homeglry from "./components/Homeglry.js";
import Dropnav from "./components/Dropnav.js";

const Home = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";

  // Use media query to check if screen width is 425px or less
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    
    <div className="home-wr">
    <GoogleOAuthProvider clientId="296927192780-60h36sne2alsb0pnhm89kbnt4pst0eqk.apps.googleusercontent.com">


      <Nav />
      <Dropnav />
      <Videopage />
      <Videopg2 />
      <Videopg3 />
      <Explore/>
      {/* <Gallery /> */}
      
      <Homeglry />
      <Videopg4 />
      <Whyuss />
      <Review />
      <div className="marquee-wrapper">
        {/* <Marquee /> */}
      </div>
      <Forms />
      <FooterSection/>
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

