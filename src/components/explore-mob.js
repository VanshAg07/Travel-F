import React from 'react';
import IndiaTrips from '../img/homeglry1.png';
import InternationalTrips from '../img/homeglry2.png';
import HoneymoonTrips from '../img/homeglry3.png';
import WeekendTrips from '../img/homeglry4.png';
import GroupTrips from '../img/homeglry5.png';
import CorporateTrips from '../img/homeglry7.png';
import './Explore-mob.css';

const TravelOptions = () => {
  const options = [
    { name: 'India Trips', imgSrc: IndiaTrips, link: '/national' },
    { name: 'Weekend Trips', imgSrc: WeekendTrips, link: '/Weekends' },
    { name: 'Group Trips', imgSrc: GroupTrips, link: '/Grouptours' },
    { name: 'International Trips', imgSrc: InternationalTrips, link: '/intern' },
    { name: 'Honeymoon Trips', imgSrc: HoneymoonTrips, link: '/Honeymoon' },
    { name: 'Corporate Trips', imgSrc: CorporateTrips, link: '/Corporate' },
  ];

  return (
    <div className="w-full h-[30vh] px-4 md:px-20 mb-20">
      {/* Heading for the Travel Options */}
      <h1 className="text-center text-2xl font-bold mb-12">Explore Your Adventure</h1>

      {/* Scrollable area with hidden scrollbar */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap justify-start items-center space-x-6">
          {options.map((option, index) => (
            <a 
              key={index} 
              href={option.link} 
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 flex justify-center items-center overflow-hidden rounded-full">
                <img 
                  src={option.imgSrc} 
                  alt={option.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-2 text-center text-sm font-medium">{option.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelOptions;