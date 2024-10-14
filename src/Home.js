import React from "react";
import "./Home.css";
import Nav from "./components/Nav.js";
import Videopage from "./components/Videopage.js";
import Videopg2 from "./components/Videopg2.js";
import Videopg3 from "./components/Videopg3.js";
import Videopg4 from "./components/Videopg4.js";
import Whyuss from "./components/Whyuss.js";
import Lottie from "lottie-react";
import cont from "./img/cont-button.json";
import { useMediaQuery } from "react-responsive";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Review from "./components/Review.js";
import Forms from "./components/Forms.js";
import Explore from "./components/Explore.js";
import ExploreMobile from "./components/explore-mob.js";
import Homeglry from "./components/Homeglry.js";
import Dropnav from "./components/Dropnav.js";
import MainFooter from "./components/Footer/MainFooter.js";
import Mobcard from "./components/Mobcard.js";
import Mobcardinter from "./components/Mobcardinter.js";
import Mobcardhoney from "./components/Mobcardhoney.js";

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
        <div className="mt-14">
          {isMobile ? <ExploreMobile /> : <Explore />}
        </div>

        {isMobile ? (
          <div className="from-yellow-50 to-yellow-100 bg-gradient-to-br pb-1">
            <div style={{ margin: "90px 30px 55px 30px" }}>
              <Mobcard />
            </div>
          </div>
        ) : (
          <Videopg2 />
        )}

        {isMobile ? (
          <div className="from-red-100 to-red-200 bg-gradient-to-br pb-1">
            <div style={{ margin: "90px 30px 55px 30px" }}>
              <Mobcardinter />
            </div>
          </div>
        ) : (
          <Videopg3 />
        )}

        {!isMobile && <Explore />}

        {isMobile ? (
          <div className="from-green-50 to-green-200 bg-gradient-to-br pb-1">
            <div style={{ margin: "90px 30px 50px 30px" }}>
              <Mobcardhoney />
            </div>
          </div>
        ) : (
          <Videopg4 />
        )}

        <Homeglry />
        <Whyuss />
        <Review />
        <Forms />
        <MainFooter />

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
