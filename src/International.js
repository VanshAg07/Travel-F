import React, { useState } from "react";
import "./International.css";
import Nav from "./components/Nav";
import intern from "./img/india.jpg";
import Lottie from "lottie-react";
import animationData from "./img/intern.json";
import Whyuss from "./components/Whyuss.js";
import Review from "./components/Review";
import cont from "./img/cont-button.json";
import Dropnav from "./components/Dropnav.js";
import Mainreview from "./components/Mainreview.js";
import MainFooter from "./components/Footer/MainFooter.js";
import shi16 from "./img/16.png";
import shi17 from "./img/17.png";
import shi18 from "./img/18.png";
import shi20 from "./img/20.png";
import shi21 from "./img/21.png";
import shi19 from "./img/19.png";
import { Link } from "react-router-dom";
import AllInternational from "./components/International/AllInternational.js";
import Homeglry from "./components/Homeglry.js";
// import Lottie from "lottie-react";

const International = () => {
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

  const places = [
    {
      id: 16,
      name: "Dubai",
      img: shi16,
    },
    {
      id: 17,
      name: "Maldives",
      img: shi17,
    },
    {
      id: 18,
      name: "Bali",
      img: shi18,
    },
    {
      id: 19,
      name: "Thailand",
      img: shi19,
    },
    {
      id: 20,
      name: "Vietnam",
      img: shi20,
    },
    {
      id: 21,
      name: "Singapore",
      img: shi21,
    },
  ];
  return (
    <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        <img className="hero-img" src={intern} alt="India" />
        <h1 className="hero-heading">
          Luxury Getaways Abroad - Book <br /> <span>Your Dream Vacation</span>
        </h1>
      </div>
      <Mainreview />

      <div className="lottie-wr">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          speed={0.5}
          className="hero-lottie"
        />
      </div>
      <div className="justify-center items-center mb-4 flex flex-col w-full">
      <h1 className="text-center text-black text-2xl mt-8 sm:text-3xl lg:text-4xl font-bold">Destinations</h1>
      <div className="bg-[#ffff00] h-1 w-14 md:w-20 lg:w-40 mt-2"></div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 w-[80%] gap-4">
          {places.map((place) => (
            <Link to={`/places/${place.name}`} key={place.id}>
              <img
                className="h-[90%] w-[100%]"
                src={place.img}
                alt={place.name}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="justify-center pt-10 items-center flex flex-col w-full ">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight sm:text-xl">
          All Packages
          </h1>
          <div className="bg-[#ffff00] h-1 w-14 md:w-20 lg:w-40 mt-2"></div>
          <div>
          <p className=" pt-2 inter-description">
        Discover Your Dream Journey with Our Best-Selling Travel Packages
      </p>
          </div>
        </div>
      
      <div>
        <AllInternational />
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
          className="w-full bg-cyan-500 text-white font-bold py-2 rounded-md transition duration-300"
        >
          Submit
        </button>
      </form>
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
    </div>
  );
};

export default International;
