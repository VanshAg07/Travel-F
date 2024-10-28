import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const InernationalPlaces = () => {
  const { name } = useParams();
  // console.log(name);
  const [packages, setPackages] = useState([]);
  const [visiblePackages, setVisiblePackages] = useState(2);
  const navigate = useNavigate();

  const whatsappMessage = "Hello, I need assistance with my issue.";
  const [nationalImages, setNationalImages] = useState([]);
  const stateName = name;
  useEffect(() => {
    fetchNationalImages();
  }, []);
  const fetchNationalImages = async () => {
    try {
      const res = await axios.get(
        `https://api.travello10.com/api/package-image/international/${stateName}`
      );
      console.log(res.data);
      setNationalImages([res.data]);
    } catch (error) {
      console.error("Error fetching national images: ", error);
    }
  };

  useEffect(() => {
    const stateName = name;
    const fetchSimilarPackages = async () => {
      try {
        const response = await fetch(
          `https://api.travello10.com/api/international/getSimilarTrips/${stateName}`
        );
        const data = await response.json();
        console.log("Fetched Packages:", data); // Check if data is correct
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchSimilarPackages();
  }, []);

  const loadMorePackages = () => {
    setVisiblePackages((prevVisible) => prevVisible + 6);
  };

  const handlePackageClick = (stateName, tripName) => {
    navigate(`/international/${tripName}/${stateName}`);
  };
  return (
    <>
      <div className="wrpper-inter">
        <Nav />
        <Dropnav />
        <div className="hero-section-left-1">
          {nationalImages.length > 0 ? (
            nationalImages.map((image, index) => (
              <img
                className="hero-img"
                key={index}
                src={image.imageUrl} // Assuming each image object has a 'url' property
                alt={image.name || "National Image"} // Assuming each image object has a 'name' property
              />
            ))
          ) : (
            <p>No images available for this location.</p>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
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
        <div className="mt-[100px] md:mt-0">
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
              {name} is an excellent place to create cherished memories with
              loved ones through its various breathtaking activities like
              trekking, river canyoning, hiking, and more. You can also enjoy
              the breathtaking views of nature here.
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
              experience with a range of traditional and modern food options.
              From local delicacies to global cuisines, the state has plenty of
              places to eat and explore.
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
              experience with its vibrant local markets and handicrafts.
              Visitors can explore the bustling bazaars for traditional clothes,
              accessories, bamboo crafts, and food items.
            </p>
          </div>
          <ShopIntern />
        </div>

        <div className="w-[90%] mx-auto">
          <p className="font-semibold text-3xl mb-4">Equivalent Getaways</p>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
            {packages.length > 0 ? (
              packages.slice(0, visiblePackages).map((pkg, index) =>
                Array.isArray(pkg.trips) && pkg.trips.length > 0 ? (
                  pkg.trips.map((trip, tripIndex) => (
                    <div
                      key={`${index}-${tripIndex}`}
                      className="h-[420px] relative shadow-black shadow-lg rounded-lg mb-10 flex justify-center items-center cursor-pointer"
                      onClick={() =>
                        handlePackageClick(pkg.stateName, String(trip.tripName))
                      }
                    >
                      <img
                        src={trip.tripImages[0]}
                        alt={trip.tripName}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-3 right-3 bg-yellow-400 pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
                        <span className="font-semibold text-sm ">{`₹ ${trip.tripPrice}/- onwards`}</span>
                      </div>
                      <div className="w-full rounded-b pl-4 pt-2 pr-4 pb-2 flex flex-col md:flex-row absolute bottom-0 bg-white">
                        <div className="w-full">
                          <h2 className="text-lg uppercase truncate font-semibold text-black pb-4">
                            {trip.tripName}
                          </h2>
                          <div className="flex flex-row mb-4 justify-between items-center w-full">
                            {/* Duration */}
                            <div className="flex items-center text-black">
                              <FaClock className="mr-2 text-black" />
                              <span className="text-black text-xs">{`${trip.tripDuration}`}</span>
                            </div>

                            {/* Location */}
                            <div className="flex items-center text-black">
                              <FaMapMarkerAlt className="mr-1 text-black" />
                              <span className="text-black text-xs">
                                {trip.tripLocation}
                              </span>
                            </div>
                          </div>
                          {/* Dates */}
                          <div className="flex items-center mb-2 text-black">
                            <FaCalendarAlt className="mr-2 text-black" />
                            <span className="text-black text-xs">
                              {/* Format the date */}
                              {new Date(trip.tripDate).toLocaleDateString(
                                "en-US",
                                {
                                  day: "numeric",
                                  month: "short",
                                }
                              )}
                            </span>
                            {trip.tripDateCount > 0 && ( // Check if tripDateCount is greater than 0
                              <span className="text-xs text-red-500 ml-1">
                                +{trip.tripDateCount}
                                <span className="ml-1">Batches</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No trips available</p>
                )
              )
            ) : (
              <p>No packages available</p>
            )}
          </div>

          {visiblePackages < packages.length && (
            <div className="flex justify-center mb-6">
              <button
                onClick={loadMorePackages}
                className="px-6 py-2 bg-[#03346e] text-white text-lg font-semibold rounded-lg"
              >
                Load More
              </button>
            </div>
          )}
        </div>

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
