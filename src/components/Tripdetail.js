import React from "react";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const TripDetailCard = ({ trip }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" }; // Short month format
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options); // Format the date
  };

  // Function to handle click event for navigation
  const handleTripClick = () => {
    navigate(`/trips/${trip.id}`); // Navigate to trip details page
  };

  // Extract the first date from the allTripDates array
  const firstDate = trip.allTripDates[0];

  return (
    <div
      className="bg-white h-[20vh] overflow-hidden rounded-lg shadow-md cursor-pointer"
      onClick={handleTripClick} // Attach click handler
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{trip.tripName}</h3>
        </div>
        <div className="flex items-center">
          <FaClock className="mr-1 text-black" />
          <p className="text-sm text-black">{trip.tripDuration}</p>
        </div>
        <div className="flex items-center mb-2 ">
          <FaCalendarAlt className="mr-1" />
          {/* Use the first date for formatting */}
          <p className="text-sm text-black mr-1">{formatDate(firstDate)}</p>
          <p className="text-sm text-red-500 text-end">
            + {trip.allTripDatesCount} batches
          </p>
        </div>
        <div className="flex items-center ">
          <FaMapMarkerAlt className="mr-1" />
          <p className="text-sm text-black">{trip.tripLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetailCard;
