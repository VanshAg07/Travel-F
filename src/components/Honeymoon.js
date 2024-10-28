import React, { useEffect, useState } from "react";
import "./Honeymoon.css";
import Nav from "../components/Nav";
import intern from "../img/india.jpg";
import Lottie from "lottie-react";
import animationData from "../img/intern.json";
import Whyuss from "./Whyuss.js";
import cont from "../img/cont-button.json";
import Review from "../components/Review";
import Dropnav from "../components/Dropnav";
import Homeglry from "../components/Homeglry.js";
import Mainreview from "../components/Mainreview.js";
import MainFooter from "../components/Footer/MainFooter.js";
import shi1 from "../img/3.png";
import shi2 from "../img/7.png";
import shi3 from "../img/4.png";
import shi4 from "../img/22.png";
import shi5 from "../img/18.png";
import shi6 from "../img/19.png";
import shi7 from "../img/17.png";
import shi8 from "../img/20.png";
import { Link } from "react-router-dom";
import HoneymoonCard from "./User/Honeymoon/HoneymoonCard.js";
import axios from "axios";

const Honeymoon = () => {
  const [backgroundImages, setBackgroundImages] = useState([]);

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
      id: 1,
      name: "Kashmir",
      img: shi1,
    },
    {
      id: 2,
      name: "Andaman",
      img: shi2,
    },
    {
      id: 3,
      name: "Kerala",
      img: shi3,
    },
    {
      id: 4,
      name: "Manali",
      img: shi4,
    },
    {
      id: 5,
      name: "Bali",
      img: shi5,
    },
    {
      id: 6,
      name: "Thailand",
      img: shi6,
    },
    {
      id: 7,
      name: "Maldives",
      img: shi7,
    },
    {
      id: 8,
      name: "Vietnam",
      img: shi8,
    },
  ];

  const fetchBackgroundImages = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/background-images/images"
    );
    setBackgroundImages(response.data);
  };
  useEffect(() => {
    fetchBackgroundImages();
  }, []);
  const nationalImages = backgroundImages.filter(
    (item) => item.type === "Honeymoon"
  );

  return (
    <div className="wrpper-inter">
      <Nav />
      <Dropnav />
      <div className="hero-section-left-1">
        {nationalImages.map((item) => (
          <div key={item._id} className="relative">
            {item.image.map((imgUrl, index) =>
              imgUrl.endsWith(".mp4") ? (
                <video
                  key={index}
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                >
                  <source src={imgUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img key={index} src={imgUrl} alt={`Image ${index}`} />
              )
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-white font-bold text-2xl xs:text-2xl sm:text-3xl lg:text-4xl leading-tight mt-4 sm:mt-8 text-center">
                {item.heading}
              </h1>
              {/* <h1 className="inline-block text-center text-black bg-[yellow] px-4 py-2 mt-4 text-xl xs:text-xl sm:text-2xl lg:text-3xl">
                Travel The Globe
              </h1> */}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[100px] md:mt-0">
        <Mainreview />
      </div>

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
        <h1 className="text-center text-black text-2xl mt-8 sm:text-3xl lg:text-4xl font-bold">
          Your Love Story, Our Destinations!
        </h1>
        <div className="bg-[#ffff00] h-1 w-14 md:w-20 lg:w-40 mt-2"></div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 w-[80%] gap-4">
          {places.map((place) => (
            <Link to={`/honeymoon-packages/${place.name}`} key={place.id}>
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
        <HoneymoonCard />
      </div>
      <div className="bg-[#ffffe6]">
        <Homeglry />
        <Whyuss />
        <Review />
        {/* <Faq /> */}
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
