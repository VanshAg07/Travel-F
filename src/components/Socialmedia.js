import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Socialmedia.css"

const SocialLinks = () => {
  return (
    <div className="absolute soci-wrpr right-0 top-1/2 transform -translate-y-1/2 w-10 flex flex-col z-50 ">
      {/* Instagram Link */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.instagram.com/travello10/"
      >
        <div
          className="group flex justify-center items-center h-8 transition-all duration-200 ease-in-out bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-t-lg "
        >
          <FaInstagram className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5 " />
        </div>
      </Link>

      {/* WhatsApp Link */}
      <a
        href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-center items-center h-8 transition-all duration-200 ease-in-out bg-[#25D366] "
      >
        <FaWhatsapp className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5 " />
      </a>

      {/* Facebook Link */}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.facebook.com/Travello10"
      >
        <div
          className="group flex justify-center items-center h-7 transition-all duration-200 ease-in-out bg-blue-600 "
        >
          <FaFacebookF className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5 " />
        </div>
      </Link>

      {/* YouTube Link */}
      <a
        href="https://www.youtube.com/@travello10"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex justify-center items-center h-7 transition-all duration-200 ease-in-out bg-red-600 rounded-b-lg "
      >
        <FaYoutube className="text-white group-hover:scale-110 transform transition-transform duration-300 h-5 w-5 " />
      </a>
    </div>
  );
};

export default SocialLinks;
