import React from 'react';

// Import images from the src folder
import upcomingTrips from '../img/homeglry1.png';
import bestSellers from '../img/homeglry2.png';
import backpackingTrips from '../img/homeglry3.png';
import newLaunches from '../img/homeglry4.png';
import himalayanTreks from '../img/homeglry5.png';

const TravelOptions = () => {
  const options = [
    { name: 'Upcoming Trips', imgSrc: upcomingTrips },
    { name: 'Best Sellers', imgSrc: bestSellers },
    { name: 'Backpacking Trips', imgSrc: backpackingTrips },
    { name: 'New Launches', imgSrc: newLaunches },
    { name: 'Himalayan Treks', imgSrc: himalayanTreks },
  ];

  return (
    <div className="w-full px-4 md:px-20">
      {/* Heading for the Travel Options */}
      <h1 className="text-center text-2xl font-bold mb-6">Explore Your Adventure</h1>

      {/* Scrollable area */}
      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex flex-nowrap justify-start items-center space-x-6">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 flex justify-center items-center overflow-hidden rounded-full">
                <img 
                  src={option.imgSrc} 
                  alt={option.name} 
                  className="object-cover w-full h-full" // Ensure image covers the full area without being cut
                />
              </div>
              <span className="mt-2 text-center text-sm font-medium">{option.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelOptions;
