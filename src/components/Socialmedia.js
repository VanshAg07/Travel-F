import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Socialmedia.css";

const SocialLinks = () => {
  return (
    <div className="absolute soci-wrpr right-0 top-1/2 transform -translate-y-1/2 w-10 flex flex-col z-50 ">
      {/* Instagram Link with Tooltip */}
      <div className="social-link relative">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.instagram.com/travello10/"
          className="group flex justify-center items-center h-8 transition-all duration-200 ease-in-out bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-t-lg"
        >
          <FaInstagram className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5" />
        </Link>
        <span className="tooltip">Follow us on Instagram</span>
      </div>

      {/* WhatsApp Link with Tooltip */}
      <div className="social-link relative">
        <a
          href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center h-8 transition-all duration-200 ease-in-out bg-[#25D366]"
        >
          <FaWhatsapp className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5" />
        </a>
        <span className="tooltip">Chat with us</span>
      </div>

      {/* Facebook Link with Tooltip */}
      <div className="social-link relative">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.facebook.com/Travello10"
          className="group flex justify-center items-center h-7 transition-all duration-200 ease-in-out bg-blue-600"
        >
          <FaFacebookF className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5" />
        </Link>
        <span className="tooltip">Like us on Facebook</span>
      </div>

      {/* YouTube Link with Tooltip */}
      <div className="social-link relative">
        <a
          href="https://www.youtube.com/@travello10"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center h-7 transition-all duration-200 ease-in-out bg-red-600 rounded-b-lg"
        >
          <FaYoutube className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5" />
        </a>
        <span className="tooltip">Subscribe on YouTube</span>
      </div>
    </div>
  );
};

export default SocialLinks;
