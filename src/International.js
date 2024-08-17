import React, { useState } from "react";
import "./International.css";
import Nav from "./components/Nav";
import intern from "./img/international.jpg";
import Lottie  from 'lottie-react';
import animationData from './img/intern.json';
import Footer from "./Footer.js"; 
import Card from "./components/3dCard.js";

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

  return (
    <div className="wrpper-inter">
      <Nav />
      <div className="hero-section-left-1">
        <img className="hero-img" src={intern} alt="International" />
        <h1 className="hero-heading">
          Luxury Getaways Abroad - Book <br /> Your Dream Vacation
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
          speed={0.5} 
           className="hero-lottie"
        />
      </div>
      <h1 className="ind-h-2">Featured Packages</h1>
      <div className="cards-container-2">
        <Card className="card-container-2" />
        <Card className="card-container-2" />
        <Card className="card-container-2" />
      </div>

      <Footer/>
    </div>
  );
};

export default International;
