import React, { useEffect, useState } from "react";
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
import Homeyt from "./components/Homeyt.js";
import Upcomingtrip from "./components/Upcomingtrips.js";
import UpcomingtripMobile from "./components/Upcomingtripmobile.js";
import SignInPopup from "./components/Popupscombined.js";
import MobileHomeGallery from "./components/MobileHomeGallery.js";
import PhoneFooter from "./components/PhoneFooter.js";
import { Link } from "react-router-dom";

const Home = () => {
  const whatsappMessage = "Hello, I need assistance with my issue.";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isLargeMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 426px)" });
  const [paymentImages, setPaymentImages] = useState([]);

  const fetchPayment = async () => {
    try {
      const res = await fetch(
        "https://api.travello10.com/api/home/home-offer-display"
      );
      const data = await res.json();
      const activeImages = Array.isArray(data.data)
        ? data.data.filter((item) => item.status === true)
        : [];

      setPaymentImages(activeImages);
    } catch (error) {
      console.log("Failed to fetch payment images:", error);
    }
  };
  useEffect(() => {
    fetchPayment();
  }, []);

  return (
    <div className="home-wr">
      <GoogleOAuthProvider clientId="your_client_id_here">
        <Nav />
        <Dropnav />
        <Videopage />
        {isLargeMobile && <ExploreMobile />}
        <Link to="/offer">
          {paymentImages.length > 0 && (
            <div className="gap-6">
              {paymentImages.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-center items-center"
                >
                  <img
                    src={`${isMobile ? item.phoneImage : item.image}`}
                    alt="Payment Method"
                    className="w-full md:mt-5 h-[70vh]"
                  />
                </div>
              ))}
            </div>
          )}
        </Link>
        {isSmallMobile ? (
          <div style={{ margin: "0px 10px 0px 10px" }}>
            <Mobcard />
          </div>
        ) : (
          <Videopg2 />
        )}

        {isSmallMobile ? (
          <div style={{ margin: "0px 10px 0px 10px" }}>
            <Mobcardinter />
          </div>
        ) : (
          <Videopg3 />
        )}

        {isSmallMobile ? (
          <div style={{ margin: "0px 10px 0px 10px" }}>
            <Mobcardhoney />
          </div>
        ) : (
          <Videopg4 />
        )}

        <div className="bg-[#ffffe6] relative">
          {isMobile ? (
            <div style={{ margin: "0px 10px 0px 10px" }}>
              <UpcomingtripMobile />
            </div>
          ) : (
            <Upcomingtrip />
          )}

          {!isMobile && <Explore />}
          {isMobile ? (
            <div className="px-2 relative">
              <MobileHomeGallery />
            </div>
          ) : (
            <div className="px-28 relative">
              <Homeglry />
            </div>
          )}
          <Whyuss />
          <Review />
          <Forms />
          <Homeyt />
        </div>
        <div className="pb-20-425 bg-white-425">
          <MainFooter />
        </div>

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
        <SignInPopup />

        <PhoneFooter />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Home;
