import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import groupTripImage from '../img/rishikesh.png';
import internationalTripImage from '../img/rishikesh.png';
import exploreIndiaImage from '../img/rishikesh.png';
import corporateTripImage from '../img/rishikesh.png';
import romanticEscapesImage from '../img/rishikesh.png';
import weekendTripImage from '../img/rishikesh.png';
import "./TripsModal.css"

function TripsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed trip-z  inset-0 flex justify-center items-end bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-t-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Choose A Trip</h2>
          <button onClick={onClose} className="text-gray-500">
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center p-2  rounded">
            <img src={groupTripImage} alt="Group Trips" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">Group Trips</span>
          </div>
          <div className="flex flex-col items-center p-2  rounded">
            <img src={internationalTripImage} alt="International Trips" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">International Trips</span>
          </div>
          <div className="flex flex-col items-center p-2  rounded">
            <img src={exploreIndiaImage} alt="Explore India" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">Explore India</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded">
            <img src={corporateTripImage} alt="Corporate Trips" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">Corporate Trips</span>
          </div>
          <div className="flex flex-col items-center p-2  rounded">
            <img src={romanticEscapesImage} alt="Romantic Escapes" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">Romantic Escapes</span>
          </div>
          <div className="flex flex-col items-center p-2  rounded">
            <img src={weekendTripImage} alt="Weekend Trips" className="w-16 h-16 object-cover rounded-full" />
            <span className="text-sm mt-2">Weekend Trips</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsModal;
