import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Home from "./Home.js";
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
import Payments from "./components/Payments.js";
import FooterSection from "./components/Footersection.js";
import Privcy from "./components/Privcy.js";
import Cancellation from "./components/Cancellation.js";
import Termcondition from "./components/Termcondition.js";
import Disclaimer from "./components/Disclaimer.js";
import Whyuss from "./components/Whyuss.js";
import Forms from "./components/Forms.js";
import Mainreview from "./components/Mainreview.js";
import Mobcard from "./components/Mobcard.js";
import Mobcardinter from "./components/Mobcardinter.js";
import Mobcardhoney from "./components/Mobcardhoney.js";
import Newsignin from "./components/Newsignin.js";
import Explore from "./components/Explore.js";
import Homeglry from "./components/Homeglry.js";
import Corporate from "./components/Corporate.js";
import Aboutus from "./components/About-us.js";
import Superpower from "./components/Superpower.js";
import Corpohero from "./components/Corpo-hero.js";
import SignUp from "./components/Login/SignUp.js";
import Login from "./components/Login/Login.js";
import Corpoform from "./components/Corpo-form.js";
import DateCosting from "./components/DatesCosting/DateCosting.js";
import BookingOptions from "./components/DatesCosting/BookingOptions.js";
import Grouptours from "./components/Grouptours.js";
import Weekends from "./components/Weekends.js";
import ComingSoon from "./components/coming/ComingSoon.jsx";
import InternationalPlaces from "./components/International/InternationalPlace.js";
import HomeHoneymoon from "./components/User/Honeymoon/HomeHoneymoon.js";
import Exploremob from "./components/explore-mob.js";
import PackageHoneymoon from "./components/User/Honeymoon/PackageHoneymoon.js";
import PackageInternatioanl from "./components/International/PackageInternational.js";
import PackageWeekend from "./components/User/WeekendTrips/PackageWeekend.js";
import { useSelector } from "react-redux";
import Grouptourform from "./components/Groupform.js"
import Socialmedia from "./components/Socialmedia.js"
import Grouptourhero from "./components/Grouptour-hero.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
import Homecrd from "./components/Homecrd.js"
import Homeyt from "./components/Homeyt.js"
import Upcomingtrip from "./components/Upcomingtrips.js"

const App = () => {
  const { user } = useSelector((state) => state.profile);
  const roleMiddleware = (roles) => {
    if (!user || !roles.includes(user.role)) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  };

  const adminMiddleware = roleMiddleware(["admin"]);
  const userMiddleware = roleMiddleware(["user"]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={adminMiddleware}>
          <Route path="/admin" element={<AdminPortal />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
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
        <Route path="/Privcy" element={<Privcy />} />
        <Route path="/Cancellation" element={<Cancellation />} />
        <Route path="/Termcondition" element={<Termcondition />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
        <Route path="/Whyuss" element={<Whyuss />} />
        <Route path="/Newsignin" element={<Newsignin />} />
        <Route path="/Homeglry" element={<Homeglry />} />
        <Route path="/blogdetails/:blogId" element={<Blogdetails />} />
        <Route path="/Footersection" element={<FooterSection />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/Mainreview" element={<Mainreview />} />
        <Route path="/Mobcard" element={<Mobcard />} />
        <Route path="/Mobcardinter" element={<Mobcardinter />} />
        <Route path="/Mobcardhoney" element={<Mobcardhoney />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Corpohero" element={<Corpohero />} />
        <Route path="/Superpower" element={<Superpower />} />
        <Route path="/Corpoform" element={<Corpoform />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Grouptours" element={<Grouptours />} />
        <Route path="/Weekends" element={<Weekends />} />
        <Route path="/place/:name" element={<Places />} />
        <Route path="/places/:name" element={<InternationalPlaces />} />
        <Route path="/Packagedetails/:name" element={<Packagedetails />} />
        <Route
          path="/International/Packages/:name"
          element={<Packagedetails />}
        />
        <Route
          path="/international/:tripName/:name"
          element={<PackageInternatioanl />}
        />
        <Route
          path="/honeymoon/:tripName/:name"
          element={<PackageHoneymoon />}
        />
        <Route path="/weekends/:tripName/:name" element={<PackageWeekend />} />
        <Route path="/honeymoon-packages/:name" element={<HomeHoneymoon />} />
        <Route path="/trip/:tripName/:name" element={<Packagedetails />} />
        <Route path="/dates-and-costing" element={<DateCosting />} />
        <Route path="/booking-options" element={<BookingOptions />} />
        <Route path="/grouptour-hero" element={<Grouptourhero />} />
        <Route path="/groupform" element={<Grouptourform />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/homecrd" element={<Homecrd />} />
        <Route path="/Homeyt" element={<Homeyt />} />
        <Route path="/upcomingtrips" element={<Upcomingtrip />} />
        {/* <Route path='/' element={<ComingSoon />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
