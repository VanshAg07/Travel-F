import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-icons">
        <a className="footer-anchors" href="">
          <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a className="footer-anchors" href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a className="footer-anchors" href="">
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a className="footer-anchors" href="">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a className="footer-anchors" href="">
        <i class="fa-solid fa-envelope"></i>
        </a>
        </div>
        <div className="footer-info">
        <h1>TRAVELLOTEN INDIA PRIVATE LIMITED</h1>
        <p>
          3rd Floor Plot, Kakarola Housing Complex, 103, Kakrola Rd, opposite
          DDA park, Raju Enclave, Sector 15 Dwarka, Dwarka, Delhi, 110078 null
          New Delhi Delhi, 110078
        </p>
        <p>+91 8287804197</p>
        <p><i class="fa-regular fa-copyright"></i>TRAVELLOTEN INDIA PRIVATE LIMITED All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
