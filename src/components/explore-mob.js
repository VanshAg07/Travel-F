import React from 'react';
import CorporateTrips from '../img/homeglry7.png';
import './Explore-mob.css';
import { useEffect, useState } from "react";
import axios from "axios";
import IndiaTrips from '../img/homeglry1.png';
import InternationalTrips from '../img/homeglry2.png';
import HoneymoonTrips from '../img/homeglry3.png';
import WeekendTrips from '../img/homeglry4.png';
import GroupTrips from '../img/homeglry5.png';

const TravelOptions = () => {
  const options = [
    { name: 'India Trips', imgSrc: IndiaTrips, link: '/national' },
    { name: 'Weekend Trips', imgSrc: WeekendTrips, link: '/Weekends' },
    { name: 'Group Trips', imgSrc: GroupTrips, link: '/Grouptours' },
    { name: 'International Trips', imgSrc: InternationalTrips, link: '/intern' },
    { name: 'Honeymoon Trips', imgSrc: HoneymoonTrips, link: '/Honeymoon' },
    { name: 'Corporate Trips', imgSrc: CorporateTrips, link: '/Corporate' },
  ];

  const [index, setIndex] = useState(0);
  const [adventures, setAdventures] = useState([]);

  const fetchAdventures = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/home/explore-adventure"
      );
      setAdventures(res.data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };

  useEffect(() => {
    fetchAdventures();
  }, []);

  return (
    <div className="w-full bg-white h-[20vh] px-4 mb-12">
      {/* Heading for the Travel Options */}
      <h1 className="text-center  text-lg font-bold mb-6">Explore Your Adventure</h1>

      {/* Scrollable area with hidden scrollbar */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-nowrap justify-start items-center space-x-4">
          {adventures.map((option, index) => (
            <a 
              key={index} 
              href={option.link} 
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 flex justify-center items-center overflow-hidden rounded-full">
                <img 
                  src={adventures.img} 
                  alt={option.name} 
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-1 text-center text-xs font-semibold">{option.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelOptions;
