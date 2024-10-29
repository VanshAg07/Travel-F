import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../img/icons8.svg';
import FacebookIcon from '../img/m-1.png';
import InstaIcon from '../img/m-2.png';
import InstaIcon1 from '../img/m-3.png';
import Star from '../img/icons8-star-48.png';
import "./Mainreview.css"

const FooterBanner = () => {
  return (
    <div className="bg-[#e1feff] mainreview-wrapper text-black py-2 text-center">
      {/* Container for the review and traveler information */}
      <div className="flex justify-center items-center space-x-2 sm:space-x-4">
        {/* Google review with custom icon */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.google.com/search?q=travello10&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQg5MzdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8"
        >
          <span className="flex items-center">
            <img src={GoogleIcon} alt="Google Reviews" className="mr-1 w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-9 lg:h-9" />
            <div className="flex flex-col items-start">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">
                4.5 <img src={Star} alt="Star" className="inline w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 star-small ml-1" />
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">Google Reviews</span>
            </div>
          </span>
        </Link>

        {/* Facebook review */}
        <Link>
          <span className="flex items-center">
            <img src={FacebookIcon} alt="Facebook Reviews" className="mr-1 w-10 h-10 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-14 lg:h-14" />
            <div className="flex flex-col items-start">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">
               13,400+</span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">Happy Costumers</span>
            </div>
          </span>
        </Link>

        {/* Instagram review */}
        <Link>
          <span className="flex items-center">
            <img src={InstaIcon} alt="Instagram Reviews" className="mr-1 w-10 h-10 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-14 lg:h-14" />
            <div className="flex flex-col items-start">
              <span className="flex items-center text-[10px] sm:text-[9px] md:text-sm lg:text-sm footer-text-small">
                No Hidden
              </span>
              <span className="text-[10px] sm:text-[9px] md:text-sm lg:text-sm footer-text-small">Charges</span>
            </div>
          </span>
        </Link>
        <Link>
          <span className="flex items-center">
            <img src={InstaIcon1} alt="Instagram Reviews" className="mr-1 w-10 h-10 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-14 lg:h-14" />
            <div className="flex flex-col items-start">
              <span className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">
                No Cost
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm lg:text-sm footer-text-small">EMI</span>
            </div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FooterBanner;

