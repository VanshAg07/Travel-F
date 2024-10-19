import React from 'react';
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const TripDetailCard = ({ trip }) => {
  return (
    <div className="bg-white h-[20vh] overflow-hidden rounded-lg shadow-md">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{trip.name}</h3>
          <div className="flex items-center">
            <FaClock className="mr-1 text-black" />
            <p className="text-sm text-black">{trip.duration}</p>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="mr-1" />
          <p className="text-sm text-black mr-1">{trip.dates}</p>
          <p className="text-sm text-red-500">{trip.batches}</p> {/* Added trip batches */}
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <p className="text-sm text-black">{trip.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetailCard;
