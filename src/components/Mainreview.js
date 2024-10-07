import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../img/icons8.svg';
import FacebookIcon from '../img/icons8-facebook.svg';
import InstaIcon from '../img/icons8-insta.svg';
import Star from '../img/icons8-star-48.png';

const FooterBanner = () => {
  return (
    <div className="bg-[#f2fdff] text-black py-8 text-center">
      {/* Container for the review and traveler information */}
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        {/* Google review with custom icon */}
        <Link 
          target="_blank" 
          rel="noopener noreferrer" 
          to="https://www.google.com/search?q=travello10&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MzdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
        >
          <span className="flex items-center">
            <img src={GoogleIcon} alt="Google Reviews" className="mr-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            <div className="flex flex-col items-start pr-2 sm:pr-4 md:pr-6 lg:pr-8">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-base">
                4.5 <img src={Star} alt="Star" className="inline w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1" />
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">Google Reviews</span>
            </div>
          </span>
        </Link>

        {/* Facebook review */}
        <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/Travello10">
          <span className="flex items-center">
            <img src={FacebookIcon} alt="Facebook Reviews" className="mr-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> 
            <div className="flex flex-col items-start pr-2 sm:pr-4 md:pr-6 lg:pr-8">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-base">
                4.6 <img src={Star} alt="Star" className="inline w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1" />
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">Facebook Reviews</span>
            </div>
          </span>
        </Link>

        {/* Instagram review */}
        <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/travello10/"> 
          <span className="flex items-center">
            <img src={InstaIcon} alt="Instagram Reviews" className="mr-1 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" /> 
            <div className="flex flex-col items-start">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-base">
                4.9 <img src={Star} alt="Star" className="inline w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ml-1" />
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">Instagram Reviews</span>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;