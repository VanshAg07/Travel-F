import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
import GoogleIcon from "./img/icons8.svg";
import FacebookIcon from "./img/icons8-facebook.svg";
import YouTubeIcon from "./img/icons8-youtube.svg";
import WhatsAppIcon from "./img/icons8-whatsapp.svg";
import GmailIcon from "./img/icons8-gmail.svg";

const Footer = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = async () => {
    try {
      const response = await axios.get(
        "https://api.travello10.com/api/home/footer-icons"
      );
      setIcons(response.data);
    } catch (error) {
      console.error("Error fetching icons:", error);
    }
  };

  return (
    <div className="footer-wrapper bg-gray-50 pb-5">
      <div className="footer-info text-center">
        <h1 className="text-xl font-bold">TRAVELLOTEN INDIA PRIVATE LIMITED</h1>
        <div className="footer-icons flex justify-center space-x-4">
          {icons.map((icon) => (
            <a
              key={icon._id} // Use unique key from data
              className="footer-anchors text-[#3953fe]"
              href={icon.url} // Use URL from fetched data
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon.iconImage[0]} // Use icon image from fetched data
                alt={icon.name} // Use name for alt text
                className="h-8 w-8 rounded-full"
              />
            </a>
          ))}
          {/* Add static links if needed */}
          <a
            className="footer-anchors"
            href="https://www.facebook.com/Travello10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a
            className="footer-anchors"
            href="https://www.google.com/search?q=travello10&oq=tr&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg5MgYIARBFGDwyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQkyNzk0ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GoogleIcon} alt="Google Reviews" className="h-8 w-8" />
          </a>
          <a
            className="footer-anchors"
            href="https://www.youtube.com/@travello10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YouTubeIcon} alt="YouTube" className="h-8 w-8" />
          </a>
          <a
            className="footer-anchors"
            href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsAppIcon} alt="WhatsApp" className="h-8 w-8" />
          </a>
          <a
            className="footer-anchors email-icon"
            href="mailto:booking@travello10.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GmailIcon} alt="Gmail" className="h-8 w-8" />
          </a>
        </div>
        <p className="footer-p mt-4">
          3rd Floor Plot, Kakarola Housing Complex, 103, Kakrola Rd, Opposite
          DDA Park, Raju Enclave, Sector 15 <br />
          Dwarka, Dwarka, Delhi, 110078 New Delhi Delhi, 110078
        </p>

        {/* New Section for Contact Info */}
        <div className="font-semibold md:flex hidden justify-center items-center space-x-8 mt-6 mb-6 text-base w-full">
          <div className="flex items-center space-x-2">
            <i className="fa fa-envelope"></i>
            <span>booking@travello10.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-phone"></i>
            <span>+91 8287804197</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fa fa-globe"></i>
            <span>www.travello10.com</span>
          </div>
        </div>

        <p className="footer-p mt-2">
          <i className="fa-regular fa-copyright icon-large-1"></i>
          TRAVELLOTEN INDIA PRIVATE LIMITED All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
