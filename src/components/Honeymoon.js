import React, { useState } from "react";
import "./Honeymoon.css";
import Nav from "../components/Nav";
import intern from "../img/india.jpg";
import Lottie from "lottie-react";
import animationData from "../img/intern.json";
import Card from "../components/3dCard.js";
import shi from "../img/crd-shi.png";
import Whyuss from "./Whyuss.js";
import cont from "../img/cont-button.json";
import Review from "../components/Review";
import Dropnav from "../components/Dropnav";
import Homeglry from "../components/Homeglry.js";
import Mainreview from "../components/Mainreview.js"
import MainFooter from '../components/Footer/MainFooter.js'
import shi1 from "../img/3.png";
import shi2 from "../img/7.png";
import shi3 from "../img/4.png";
import shi4 from "../img/22.png";
import shi5 from "../img/18.png";
import shi6 from "../img/19.png";
import shi7 from "../img/17.png";
import shi8 from "../img/20.png";

const Honeymoon = () => {
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
      id: 1, name: "Dubai", img: shi1
    },
    {
      id: 2, name: "Maldives", img: shi2
    },
    {
      id: 3, name: "Maldives", img: shi3
    },
    {
     id: 4, name: "Maldives", img: shi4
    },
    {
      id: 5, name: "Maldives", img: shi5
    },
    {
      id: 6, name: "Maldives", img: shi6
    },
    {
      id: 7, name: "Maldives", img: shi7
    },
    {
      id: 8, name: "Maldives", img: shi8
    }
  ]
  return (
    <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        <div className=" weekend-hero w-[100%] h-[100%]">
          <img className="h-[750px] w-[100%]" src={intern} alt="India" />
          <h1 className="top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-[3.5rem]  absolute text-white text-center">
            Honeymoon Tour Packages
          </h1>
          <p className="text-[1.7rem] transform -translate-x-1/2 -translate-y-1/2  top-[52%] left-[25%]  absolute bg-[yellow] text-black pt-[15px] pb-[15px] pl-[15px] pr-[15px] ">
            {" "}
            Where Forever Begins...Together!
          </p>
        </div>
      </div>
      <Mainreview/>

      <div className="lottie-wr">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          speed={0.5}
          className="hero-lottie"
        />
      </div>
      <h1 className="ind-h">Your Love Story, Our Destinations!</h1>
      <div className=" w-full flex justify-center items-center">
        <div className="grid grid-cols-3 w-[80%] gap-4">
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

      <div>
        <Card />
      </div>
      <Homeglry />
      <Whyuss />
      <Review />
      {/* <Faq /> */}
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

export default Honeymoon;
