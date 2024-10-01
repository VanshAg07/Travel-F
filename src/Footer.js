import React from "react";
import "./Footer.css";
import GoogleIcon from './img/icons8.svg';
import FacebookIcon from './img/icons8-facebook.svg';
import YouTubeIcon from './img/icons8-youtube.svg';
import WhatsAppIcon from './img/icons8-whatsapp.svg';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-info">
        <h1>TRAVELLOTEN INDIA PRIVATE LIMITED</h1>
        <p>
          3rd Floor Plot, Kakarola Housing Complex, 103, Kakrola Rd, Opposite
          DDA Park, Raju Enclave, Sector 15 Dwarka, Dwarka, Delhi, 110078
          New Delhi Delhi, 110078
        </p>
        <p>+91 8287804197</p>

        <div className="footer-icons">
          <a 
            className="footer-anchors text-[#3953fe]" 
            href="https://www.facebook.com/Travello10" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a 
            className="footer-anchors" 
            href="https://www.instagram.com/travello10/" 
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
            style={{ color: '#ff3d00', fontSize: '2rem' }} // adjust fontSize for height/width
          >
            <IoIosMail className="h-8 w-8" />
          </a>
        </div>

        <p>
          <i className="fa-regular fa-copyright icon-large-1"></i>
          TRAVELLOTEN INDIA PRIVATE LIMITED All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
