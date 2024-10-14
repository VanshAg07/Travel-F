// SocialLinks.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 w-20 flex flex-col z-50">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.instagram.com/travello10/"
      >
        <a
          className="flex justify-center items-center h-10 transition-all duration-200 ease-in-out bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-t-lg hover:w-24" // Changed from hover:w-32 to hover:w-24
        >
          <FaInstagram className="text-white" size={30} />
        </a>
      </Link>
      <a
            href="https://wa.me/918287804197?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
        className="flex justify-center items-center h-10 transition-all duration-200 ease-in-out bg-[#25D366] rounded-none hover:w-24" 
        >
        <FaWhatsapp className="text-white" size={30} />
      </a>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.facebook.com/Travello10"
      >
        <a
          className="flex justify-center items-center h-10 transition-all duration-200 ease-in-out bg-blue-600 rounded-none hover:w-24" // Changed from hover:w-32 to hover:w-24
        >
          <FaFacebookF className="text-white" size={30} />
        </a>
      </Link>

      {/* <a
        href="#"
        className="flex justify-center items-center h-10 transition-all duration-200 ease-in-out bg-gray-900 rounded-none hover:w-24" // Changed from hover:w-32 to hover:w-24
      >
        <FaTwitter className="text-white" size={30} />
      </a> */}

      <a
        href="https://www.youtube.com/@travello10"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center h-10 transition-all duration-200 ease-in-out bg-red-600 rounded-b-lg hover:w-24" // Changed from hover:w-32 to hover:w-24
      >
        <FaYoutube className="text-white" size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;