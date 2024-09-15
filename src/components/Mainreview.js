import React from 'react';
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterBanner = () => {
  return (
    <div className="bg-white text-black py-5 text-center">
      {/* Container for the review and traveler information */}
      <div className="flex justify-center items-center mb-2 space-x-4">
        {/* Google review with icon */}
        <Link  target="_blank" rel="noopener noreferrer" to="https://www.google.com/search?q=travello10&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MzdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"><span className="flex items-center">
          <FaGoogle className="mr-2" /> 4.5 Google Reviews
        </span></Link>
        <span>|</span>
        <span>13,400+ Happy Traveller</span>
        <span>|</span>
       <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/Travello10"><span className="flex items-center">
        <FaFacebook className="mr-2" />@travello10</span> </Link>
        <span>|</span>
       <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/travello10/"> <span className="flex items-center">
        <FaInstagram className="mr-2" />@travello10</span></Link>
      </div>
      {/* Quote */}
      <p className="mt-2">The world is a book, and those who do not travel read only one page.</p>
    </div>
  );
};

export default FooterBanner;
