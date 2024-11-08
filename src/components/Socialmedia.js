import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Socialmedia.css"; // Import the CSS file

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/Travello10"
        className="icon facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
        <span>
          Chat on
          <br /> Facebook
        </span>
      </a>
      <a
        href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="icon whatsapp"
      >
        <FaWhatsapp />
        <span>
          Chat on <br /> WhatsApp
        </span>
      </a>
      <a
        href="https://www.instagram.com/travello10/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon instagram"
      >
        <FaInstagram />
        <span>
          View on <br /> Instagram
        </span>
      </a>
      <a
        href="https://www.youtube.com/@travello10"
        target="_blank"
        rel="noopener noreferrer"
        className="icon youtube"
      >
        <FaYoutube />
        <span>
          Watch on <br /> YouTube
        </span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
