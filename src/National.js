import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./National.css";
import Nav from "./components/Nav";
import intern from "./img/international.jpg";
import Lottie from "lottie-react";
import animationData from "./img/India.json";
import shi1 from "./img/1.png";
import shi2 from "./img/2.png";
import shi3 from "./img/3.png";
import shi4 from "./img/4.png";
import shi5 from "./img/5.png";
import shi7 from "./img/7.png";
import shi8 from "./img/8.png";
import shi12 from "./img/12.png";
import shi13 from "./img/13.png";
import shi15 from "./img/15.png";
import Whyuss from "./components/Whyuss.js";
import Guide from "./components/Indguide.js";
import cont from "./img/cont-button.json";
import axios from "axios";
import Review from "./components/Review";
import AllPackagesCard from "./components/Cards/AllPackagesCard.js";
import Dropnav from "./components/Dropnav.js";
import Mainreview from "./components/Mainreview.js";
import MainFooter from "./components/Footer/MainFooter.js";

const National = () => {
  const [getTrip, setGetTrip] = useState([]);
  const tripDetails = () => {
    const response = axios.get("http://localhost:5000/api/user/getTripDetails");
    response.then((res) => {
      setGetTrip(res.data);
    });
  };
  useEffect(() => {
    tripDetails();
  });
  const places = [
    { id: 1, name: "Meghalaya", img: shi13 },
    { id: 2, name: "Kashmir", img: shi3 },
    { id: 3, name: "Spiti Valley", img: shi12 },
    { id: 4, name: "Kerala", img: shi4 },
    { id: 5, name: "Himachal Pradesh", img: shi1 },
    { id: 6, name: "Rajasthan", img: shi15 },
    { id: 7, name: "Uttarakhand", img: shi2 },
    { id: 8, name: "Ladakh", img: shi8 },
    { id: 9, name: "Sikkim", img: shi5 },
    { id: 10, name: "Andaman", img: shi7 },
    // { id: 6, name: "Place 6", img: shi6 },
    // { id: 9, name: "Place 9", img: shi9 },
    // { id: 11, name: "Place 11", img: shi11 },
    // { id: 10, name: "Place 10", img: shi10 },
    // { id: 14, name: "Place 14", img: shi14 },
    // { id: 16, name: "Place 16", img: shi16 },
    // { id: 17, name: "Place 17", img: shi17 },
    // { id: 18, name: "Place 18", img: shi18 },
  ];
  const linkedPlaces = places.map((place) => {
    const matchingTrip = getTrip.find((trip) => trip.stateName === place.name);
    return matchingTrip ? { ...place, tripId: matchingTrip._id } : place;
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactNo") {
      const re = /^[0-9\b]+$/;
      if (value === "" || (re.test(value) && value.length <= 10)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  const whatsappMessage = "Hello, I need assistance with my issue.";

  return (
    <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        <img className="hero-img" src={intern} alt="International" />
        <h1 className="hero-heading">
          India's Majestic Adventures
          <br /> <span>Unveil the Wonders</span>
        </h1>
      </div>
      <Mainreview />

      <div className="lottie-wr">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="hero-lottie"
        />
      </div>

      <h1 className="ind-h">Destinations</h1>
      <div className=" w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 w-[80%] gap-4">
          {places.map((place) => (
            // <Link to={`/place/${place.name}`} key={place.id}>
              <img
                className="h-[90%] w-[100%]"
                src={place.img}
                alt={place.name}
              />
            // </Link>
          ))}
        </div>
      </div>
      <h1 className="all-packages-heading">All Packages</h1>
      <p className="all-packages-description">
        Discover Your Dream Journey with Our Best-Selling Travel Packages
      </p>
      <div className="flex justify-center mt-28">
        <div className="w-[80%]">
          <AllPackagesCard />
        </div>
      </div>
      <Whyuss />
      <Review />
      <Guide />
      <h1 className="pt-14 md:pt-20 text-2xl md:text-4xl font-bold text-center text-gray-800">
  Contact Form
</h1>
<div className="min-h-screen flex items-center justify-center px-4">

  {/* Outer div with 80% width */}
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-4xl lg:w-4/5">
    
    {/* Inner form container with 60% width */}
    <div className="w-full md:w-3/5 mx-auto">
      <h2 className="text-cyan-500 text-lg font-semibold mb-1">
        Travello10 Calling?
      </h2>
      <h3 className="text-lg font-semibold mb-6">
        Allow Us to Call You Back!
      </h3>
      <form>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
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
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
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
          <label className="block text-sm font-medium mb-1" htmlFor="email">
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
          <label className="block text-sm font-medium mb-1" htmlFor="message">
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
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-md transition duration-300"
        >
          Submit
        </button>
      </form>
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
    </div>
  );
};

export default National;
