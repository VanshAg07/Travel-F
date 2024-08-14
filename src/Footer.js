import React from "react";
import "./Footer.css";

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
        <a className="footer-anchors text-[#3953fe]" href="https://www.facebook.com/Travello10" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-square-facebook icon-lrge "></i>
        </a>
        <a className="footer-anchors " href="https://www.instagram.com/travello10/" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram icon-lrge text-[#FF0000]"></i>
        </a>
        <a className="footer-anchors" href="https://www.youtube.com/@travello10" target="_blank" rel="noopener noreferrer" >
          <i class="fa-brands fa-youtube icon-lrge text-[#FF0000]"></i>
        </a>
        <a
          className="footer-anchors"
          href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-whatsapp icon-lrge text-[#33b44d]"></i>
        </a>
        <a className="footer-anchors" href="mailto:booking@travello10.com" target="_blank" rel="noopener noreferrer" >
        <i class="fa-solid fa-envelope icon-lrge text-[#D44638] "></i>
        </a>
        </div>


        <p><i class="fa-regular fa-copyright icon-lrge-1"></i>TRAVELLOTEN INDIA PRIVATE LIMITED All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
