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
    <div className="w-full overflow-x-auto">
      <div className="flex flex-nowrap justify-start items-center space-x-6">
        {options.map((option, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={option.imgSrc} 
              alt={option.name} 
              className="w-24 h-24 rounded-full object-cover"
            />
            <span className="mt-2 text-center text-sm font-medium">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelOptions;

