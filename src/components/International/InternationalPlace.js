import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav";
import "../Places.css"; // Ensure this file has the styles defined above
import bg from "../../img/india.jpg";
import Whyuss from "../Whyuss";
import Review from "../Review";
import Dropnav from "../../components/Dropnav";
import cont from "../../img/cont-button.json";
import Lottie from "lottie-react";
import MainFooter from "../Footer/MainFooter";
import Mainreview from "../Mainreview";
import InternatioanlCard from "./InternationalCard";
import HikingIntern from "./HikingIntern";
import VisitIntern from "./VisitIntern";
import FoodInern from "./FoodIntern";
import ShopIntern from "./ShopIntern";
import StateInternational from "./StateInternatioanl";
import Homeglry from "../../components/Homeglry.js";

const InernationalPlaces = () => {
  const { name } = useParams();
  console.log(name);
  const whatsappMessage = "Hello, I need assistance with my issue.";
  return (
    <>
      <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        <img className="hero-img" src={bg} alt="International" />
        <div className="relative flex flex-col items-center">
  <div className="relative w-full flex items-start justify-center">
    <h1 className="ml-6 text-center text-white font-bold text-2xl xs:text-2xl sm:text3xl lg:text-4xl leading-tight mt-4 sm:mt-8">
    {name} Tour Packages
    </h1>
  </div>
  
  <h1 className="inline-block text-center text-black bg-[yellow] px-4 py-2 mt-4 text-xl xs:text-xl sm:text-2xl lg:text-3xl">
  The Perfect Blend of Adventure
  </h1>
</div>


      </div>
      <div className="mt-[70px] md:mt-0">
  <Mainreview />
</div>
        <div className="justify-center pt-10 items-center flex flex-col w-full ">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight sm:text-xl">
            Featured Packages
          </h1>
          <div className="bg-[#ffff00] h-1 w-14 md:w-20 lg:w-40 mt-2"></div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full">
            <Link to={`/Packagedetails/${name}`}>
              <StateInternational />
            </Link>
          </div>
          </div>
        <div className="w-full mx-auto pt-10 flex flex-col">
       <div className="w-[90%] mx-auto">
          <h1 className="text-xl text-left md:text-3xl lg:text-4xl pb-4 font-semibold leading-tight sm:text-x">
            Best activities to do in {name} for a thrilling adventure
          </h1>
           <p className="text-sm sm:text-base md:text-lg  pb-8 lg:text-xl text-gray-700 leading-relaxed">
            {name} is an excellent place to create cherished memories with loved
            ones through its various breathtaking activities like trekking,
            river canyoning, hiking, and more. You can also enjoy the
            breathtaking views of nature here.
          </p>
          </div>
          <HikingIntern />
        </div>

        <div className=" w-full mx-auto pt-10 flex flex-col">
       <div className="w-[90%] mx-auto">
          <h1 className="text-xl text-left md:text-3xl lg:text-4xl pb-4 font-semibold leading-tight sm:text-x">
            Beautiful Places To Visit In {name} For A Blissful Vacay
          </h1>
           <p className="text-sm sm:text-base md:text-lg  pb-8 lg:text-xl text-gray-700 leading-relaxed">
            Whether you're looking for an adrenaline rush or simply want to
            enjoy natural scenery, {name} is the perfect place for you. It
            should be at the top of your list for your next getaway.
          </p>
          </div>
          <VisitIntern />
        </div>
        <div className="w-full mx-auto pt-10 flex flex-col">
       <div className="w-[90%] mx-auto">
          <h1 className="text-xl text-left md:text-3xl lg:text-4xl pb-4 font-semibold leading-tight sm:text-x">
            Places to Enjoy The Rich Flavors Of {name}
          </h1>
           <p className="text-sm sm:text-base md:text-lg  pb-8 lg:text-xl text-gray-700 leading-relaxed">
            {name}, known as the abode of clouds, offers a diverse culinary
            experience with a range of traditional and modern food options. From
            local delicacies to global cuisines, the state has plenty of places
            to eat and explore.
          </p>
          </div>
          <FoodInern />
        </div> 
        <div className="w-full mx-auto pb-12 pt-10 flex flex-col ">
       <div className="w-[90%] mx-auto">
          <h1 className="text-xl text-left md:text-3xl lg:text-4xl pb-4 font-semibold leading-tight sm:text-x">
            Best Places to shop in {name}
          </h1>
           <p className="text-sm sm:text-base md:text-lg  pb-8 lg:text-xl text-gray-700 leading-relaxed">
            {name}, a northeastern state of India, offers a unique shopping
            experience with its vibrant local markets and handicrafts. Visitors
            can explore the bustling bazaars for traditional clothes,
            accessories, bamboo crafts, and food items.
          </p>
          </div>
          <ShopIntern />
        </div>

        {/* <div className="travel-guidelines1-container p-4 md:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
            {name} Travel Guidelines
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
            The following are the travel guidelines for {name} as announced by
            the {name} Government latest on 04-08-2021.
          </p>
          <ol className="list-decimal ml-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2">
            <li>
              All tourists entering the territory of {name} need to have Aarogya
              Setu on their phones.
            </li>
            <li>
              Social Distancing should be maintained at all times in public
              places.
            </li>
            <li>
              Travellers need to have face masks on when travelling in public
              places.
            </li>
            <li>
              Washing of hands and the use of sanitizers is highly recommended
              by the government.
            </li>
          </ol>
        </div> */}

        
         
        <div className="bg-[#ffffe6]">
        <Homeglry />
        <Whyuss />
        <Review />
        {/* <Guide /> */}

        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Contact Form
        </h1>
        <div className=" flex items-center pb-14 justify-center px-4">
          {/* Outer div with 80% width */}
          <div className="bg-[#e1feff] rounded-lg shadow-md shadow-black p-6 md:p-8 w-full max-w-4xl lg:w-4/5">
            {/* Inner form container with 60% width */}
            <div className="w-full md:w-3/5 mx-auto">
              <h2 className="text-cyan-500 text-lg font-bold mb-1">
                Travello10 Calling?
              </h2>
              <h3 className="text-base font-semibold mb-6">
                Allow Us to Call You Back!
              </h3>
              <form>
                {/* Name */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. John Smith"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your 10 digit number"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Any Message"
                    className="w-full border border-gray-300 p-2 rounded-md"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white font-bold py-2 rounded-md transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
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
    </>
  );
};

export default InernationalPlaces;
