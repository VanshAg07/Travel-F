import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../img/icons8.svg';
import FacebookIcon from '../img/icons8-facebook.svg';
import InstaIcon from '../img/icons8-insta.svg';
import Star from '../img/icons8-star-48.png';

const FooterBanner = () => {
  return (
    <div className="bg-[#f2fdff] text-black py-5 text-center">
      {/* Container for the review and traveler information */}
      <div className="flex justify-center items-center mb-2 space-x-4">
        {/* Google review with custom icon */}
        <Link 
          target="_blank" 
          rel="noopener noreferrer" 
          to="https://www.google.com/search?q=travello10&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MzdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
        >
          <span className="flex items-center">
          <img src={GoogleIcon} alt="Google Reviews" className="mr-2 w-12 h-12" />
            <div className="flex flex-col items-start pr-10">
              <span className="flex items-center">
                4.5 <img src={Star} alt="Star" className="inline w-5 h-5 ml-1" />
              </span>
              <span>Google Reviews</span>
            </div>
          </span>
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/Travello10">
          <span className="flex items-center">
            <img src={FacebookIcon} alt="Facebook Reviews" className="mr-2 w-12 h-12" /> 
            <div className="flex flex-col items-start pr-10">
              <span className="flex items-center">
                4.6 <img src={Star} alt="Star" className="inline w-5 h-5 ml-1" />
              </span>
              <span>Facebook Reviews</span>
            </div>
          </span>
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/travello10/"> 
          <span className="flex items-center">
            <img src={InstaIcon} alt="Instagram Reviews" className="mr-2 w-12 h-12" /> 
            <div className="flex flex-col items-start">
              <span className="flex items-center">
                4.9 <img src={Star} alt="Star" className="inline w-5 h-5 ml-1" />
              </span>
              <span>Instagram Reviews</span>
            </div>
          </span>
        </Link>
      </div>
      {/* Quote */}
    </div>
  );
};

export default FooterBanner;

