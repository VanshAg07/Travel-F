import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./National.css";
import Nav from "./components/Nav";
import intern from "./img/international.jpg";
import Lottie from "lottie-react";
import animationData from "./img/India.json";
import Footer from "./Footer.js";
import shi1 from "./img/1.png";
import shi2 from "./img/2.png";
import shi3 from "./img/3.png";
import shi4 from "./img/4.png";
import shi5 from "./img/5.png";
import shi6 from "./img/6.png";
import shi7 from "./img/7.png";
import shi8 from "./img/8.png";
import shi9 from "./img/9.png"; 
import shi10 from "./img/10.png";
import shi11 from "./img/11.png";
import shi12 from "./img/12.png";
import shi13 from "./img/13.png";
import shi14 from "./img/14.png";
import shi15 from "./img/15.png";
import shi16 from "./img/16.png";
import shi17 from "./img/17.png";
import shi18 from "./img/18.png";
import Whyuss from "./components/Whyuss.js";
import Form from "./components/Form.js";
import Guide from "./components/Indguide.js";
import cont from "./img/cont-button.json";
import axios from "axios";
import Review from "./components/Review";
import AllPackagesCard from "./components/Cards/AllPackagesCard.js";
import FooterSection from "./components/Footersection";
import Dropnav from "./components/Dropnav.js"

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
      <Dropnav/>
      <div className="hero-section-left-1">
        <img className="hero-img" src={intern} alt="International" />
        <h1 className="hero-heading">
          India's Majestic Adventures
          <br /> <span>Unveil the Wonders</span>
        </h1>
        <div className="hero-section-right-1">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="hero-section-h2">
              Not sure what to do? <br /> We’ll give you a call back!
            </h2>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="contactNo">Contact No.:</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              placeholder="Enter Your Phone Number"
              value={formData.contactNo}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Contact number should be exactly 10 digits"
            />
            <button className="hero-button" type="submit">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>

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
      <div className="grid grid-cols-3 w-[80%] gap-4">
  {linkedPlaces.map((place) => (
    <Link to={`/place/${place.name}`} key={place.id}>
      <img className="h-[90%] w-[100%]" src={place.img} alt={place.name} />
    </Link>
  ))}
</div>
</div>
      <h1 className="all-packages-heading">All Packages</h1>
      <p className="all-packages-description">
        Discover Your Dream Journey with Our Best-Selling Travel Packages
      </p>
      {/* <div>
        <Card />
      </div> */}
      <div className="flex justify-center mt-28">
        <div className="w-[80%]">
          <AllPackagesCard />
        </div>
      </div>

      <Whyuss />
      <Review/>
      <Guide />
      <Form />
      <FooterSection/>
      <Footer />

      <div className="fixed-button">
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
