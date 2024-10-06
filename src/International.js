import React, { useState } from "react";
import "./International.css";
import Nav from "./components/Nav";
import intern from "./img/india.jpg";
import Lottie  from 'lottie-react';
import animationData from './img/intern.json';
import Footer from "./Footer.js"; 
import Card from "./components/3dCard.js";
import shi from "./img/crd-shi.png";
import Whyuss from "./components/Whyuss.js";
import Form from "./components/Form.js";
import Guide from "./components/Interguide.js";
import Review from "./components/Review";
import cont from "./img/cont-button.json";
import FooterSection from "./components/Footersection.js";
import Dropnav from "./components/Dropnav.js";
import Mainreview from "./components/Mainreview.js"
import MainFooter from "./components/Footer/MainFooter.js";

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

  return (
    <div className="wrpper-inter">
      <Nav />
      <Dropnav/>
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
      <h1 className="ind-h">Destinations</h1>
      <div className="ind-div">
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
        <img className="ind-img" src={shi} alt="India" />
      </div>

      <h1 className="all-packages-heading">All Packages</h1>
      <p className="all-packages-description">
        Discover Your Dream Journey with Our Best-Selling Travel Packages
      </p>

      <div>
        <Card />
      </div>
      <Whyuss/>
      <Review/>
      <Guide/>
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

export default International;