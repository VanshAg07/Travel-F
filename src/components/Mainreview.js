import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../img/icons8.svg';
import FacebookIcon from '../img/icons8-facebook.svg';
import InstaIcon from '../img/icons8-insta.svg';
import Star from '../img/icons8-star-48.png';

const FooterBanner = () => {
  return (
    <div className="bg-[#f2fdff] text-black py-8 text-center mt-52">
      {/* Container for the review and traveler information */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Google review with custom icon */}
        <Link 
          target="_blank" 
          rel="noopener noreferrer" 
          to="https://www.google.com/search?q=travello10&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MzdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
        >
          <span className="flex items-center">
            <img src={GoogleIcon} alt="Google Reviews" className="mr-1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            <div className="flex flex-col items-start pr-2 sm:pr-4">
              <span className="flex items-center text-xs sm:text-sm md:text-base">
                4.5 <img src={Star} alt="Star" className="inline w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1" />
              </span>
              <span className="text-xs sm:text-sm md:text-base">Google Reviews</span>
            </div>
          </span>
        </Link>

        {/* Facebook review */}
        <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/Travello10">
          <span className="flex items-center">
            <img src={FacebookIcon} alt="Facebook Reviews" className="mr-1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> 
            <div className="flex flex-col items-start pr-2 sm:pr-4">
              <span className="flex items-center text-xs sm:text-sm md:text-base">
                4.6 <img src={Star} alt="Star" className="inline w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1" />
              </span>
              <span className="text-xs sm:text-sm md:text-base">Facebook Reviews</span>
            </div>
          </span>
        </Link>

        {/* Instagram review */}
        <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/travello10/"> 
          <span className="flex items-center">
            <img src={InstaIcon} alt="Instagram Reviews" className="mr-1 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> 
            <div className="flex flex-col items-start">
              <span className="flex items-center text-xs sm:text-sm md:text-base">
                4.9 <img src={Star} alt="Star" className="inline w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1" />
              </span>
              <span className="text-xs sm:text-sm md:text-base">Instagram Reviews</span>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;
