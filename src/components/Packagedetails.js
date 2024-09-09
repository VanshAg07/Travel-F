import React, { useState, useEffect } from "react";
import "./Packagedetails.css";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import bg from "../img/india.jpg";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import Footer from "../Footer";
import axios from "axios";

const Packagedetails = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedDay, setExpandedDay] = useState(null);
  const { tripName, name } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDay1Expanded, setIsDay1Expanded] = useState(false);

  const handleDownload = () => {
    window.open("/itinerary.pdf", "_blank");
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(
          `https://travel-server-iley.onrender.com/api/user/getPackage/${tripName}/${name}`
        );
        setPackageDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching package details:", error);
        setError("Failed to load package details");
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [tripName, name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Nav />
      <img src={bg} alt="Descriptive Alt Text" className="full-width-image" />
      <button className="cssbuttons-io-button" onClick={handleDownload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
          ></path>
        </svg>
        <span>Download Itinerary</span>
      </button>

      <div>
        <h2>{packageDetails?.title} Road Trip</h2>
      </div>
      <div className="icons">
        <div className="icon-text-container">
          <FaMapMarkerAlt className="icon" />
          <span className="icon-text">Pickup & Drop:</span>
          <span className="icon-text">{packageDetails?.pickupDropLocation}</span>
        </div>
        <div className="icon-text-container">
          <FaClock className="icon" />
          <span className="icon-text">Duration:</span>
          <span className="icon-text">{packageDetails?.duration}</span>
        </div>
      </div>

      <nav className="package-nav">
        {["overview", "itinerary", "inclusions", "exclusions", "other-info"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? "active" : ""}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
          </a>
        ))}
      </nav>

      <div id="overview" className="overview-container">
        <h1>Overview & Highlights</h1>
        <h2>{packageDetails?.route}</h2>
        <p>{packageDetails?.overview}</p>
        <button onClick={handleToggle} className="toggle-button-1">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div id="itinerary" className="itinerary-container">
        <h1>Itinerary</h1>
        {packageDetails?.itinerary?.map((day, index) => (
          <div key={index} className="day-container">
            <div className="day-header">
              <h3>Day {index + 1}</h3>
              <p>{day.summary}</p>
              <span className="plus-icon" onClick={() => handleToggleDay(index + 1)}>
                +
              </span>
            </div>
            {expandedDay === index + 1 && (
              <ul className="itinerary-details">
                {day.details?.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div id="inclusions" className="inclusions-container">
        <h1>Inclusions</h1>
        <ul>
          {packageDetails?.inclusions?.map((inclusion, idx) => (
            <li key={idx}>
              <SiTicktick /> {inclusion}
            </li>
          ))}
        </ul>
      </div>

      <div id="exclusions" className="exclusions-container">
        <h1>Exclusions</h1>
        <ul>
          {packageDetails?.exclusions?.map((exclusion, idx) => (
            <li key={idx}>
              <RxCrossCircled /> {exclusion}
            </li>
          ))}
        </ul>
      </div>

      <div id="other-info" className="other-info-container">
        <h1>Other Information</h1>
        <p>{packageDetails?.otherInfo}</p>
      </div>

      <Footer />
    </div>
  );
};

export default Packagedetails;
