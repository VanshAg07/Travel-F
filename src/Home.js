import React from "react";
import "./Home.css";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Videopg4 from "./components/Videopg4.js";
import Gallery from "./Gallery.js";
import Whyuss from "./components/Whyuss.js";
import Lottie from "lottie-react";
import cont from "./img/cont-button.json";
import { useMediaQuery } from "react-responsive";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Review from "./components/Review.js";
import Forms from "./components/Forms.js";
import Explore from "./components/Explore.js";
import Homeglry from "./components/Homeglry.js";
import Dropnav from "./components/Dropnav.js";
import MainFooter from "./components/Footer/MainFooter.js";
import Mobcard from "./components/Mobcard.js"; 
import Mobcardinter from "./components/Mobcardinter.js"; 
import Mobcardhoney from "./components/Mobcardhoney.js"; 
import PhoneFooter from "./components/PhoneFooter.js";

const Home = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Check for mobile size
  const isPhone = useMediaQuery({ query: "(max-width: 375px)" }); // Check for phone size less than 375px

  return (
    <div className="home-wr">
      <GoogleOAuthProvider clientId="296927192780-60h36sne2alsb0pnhm89kbnt4pst0eqk.apps.googleusercontent.com">
        <Nav />
        <Dropnav />
        <Videopage />
        
        {isMobile ? (
          <div style={{ margin: '130px 30px 55px 30px' }}>
            <Mobcard />
          </div>
        ) : (
          <Videopg2 />
        )}
        {isMobile ? (
          <div style={{ margin: '130px 30px 55px 30px' }}>
            <Mobcardinter />
          </div>
        ) : (
          <Videopg3 />
        )}
        <Explore />
        <Homeglry />
        {isMobile ? (
          <div style={{ margin: '130px 30px 55px 30px' }}>
            <Mobcardhoney />
          </div>
        ) : (
          <Videopg4 />
        )}
        <Whyuss />
        <Review />
        <div className="marquee-wrapper">{/* <Marquee /> */}</div>
        <Forms />
        <MainFooter />

        {isPhone && <PhoneFooter />} {/* Display PhoneFooter only if screen width is less than 375px */}

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
