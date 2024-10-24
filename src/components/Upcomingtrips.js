import React, { useState } from "react";
import img1 from "../img/HimachalPradesh.png";
import img2 from "../img/Uttarakhand.png";
import img3 from "../img/Kashmir.png";
import img4 from "../img/kerala.png";
import img5 from "../img/ladakh.png";
import img6 from "../img/kedarnath.png";
import img7 from "../img/badrinath.png";
import img8 from "../img/sikkim.jpg";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

const trips = [
  {
    id: 1,
    location: "Himachal Pradesh",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img1,
  },
  {
    id: 2,
    location: "Uttarakhand",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img2,
  },
  {
    id: 3,
    location: "Kashmir",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img3,
  },
  {
    id: 4,
    location: "Kerala",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img4,
  },
  {
    id: 5,
    location: "Ladakh",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img5,
  },

  {
    id: 6,
    location: "Kedarnath",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img6,
  },
  {
    id: 7,
    location: "Badrinath",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img7,
  },
  {
    id: 8,
    location: "Sikkim",
    date: "14 Oct, 21 Oct",
    batches: "+6 Batches",
    duration: "4N/5D",
    departure: "Delhi to Delhi",
    image: img8,
  },
];

const TripCard = ({ trip }) => {
  return (
    <div className="bg-white h-[60vh]  shadow-md shadow-black rounded-lg overflow-hidden mb-4">
      <img
        src={trip.image}
        alt="Trip"
        className="w-[100vw] h-[300px] object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{trip.location}</h3>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            <p className="text-sm text-black">{trip.duration}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <p className="text-sm text-black">{trip.date}</p>
            <span className="ml-1 text-sm text-red-500 ">{trip.batches}</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1" />
          <p className="text-sm text-black">{trip.departure}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [startIndex, setStartIndex] = useState(0);
  const tripsToShow = 4;

  // Handle next trips
  const nextTrips = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % trips.length);
  };

  // Handle previous trips
  const prevTrips = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + trips.length) % trips.length);
  };

  // Go to a specific trip
  const goToTrip = (tripIndex) => {
    setStartIndex(tripIndex);
  };

  return (
    <div className="min-h-screen bg-[#ffffe6] p-2 flex justify-center">
      <div className="w-[90vw]"> {/* Change from w-[80%] to w-[90vw] */}
        <h1 className="text-3xl pl-12 font-bold mb-6">Upcoming Trips</h1>
        <div className="flex pl-10 mb-6 w-full justify-between">
          <div className="flex flex-row w-[70%] justify-between">
            {/* Month buttons */}
            {["OCT", "NOV", "DEC", "JAN", "FEB", "MAR"].map((month) => (
              <button key={month} className="p-1 w-24 h-10 flex justify-center items-center text-center bg-white border border-black rounded-xl">
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Slider container */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevTrips} className="p-2">
            <FaChevronCircleLeft size={30} />
          </button>

          {/* Displaying the trips */}
          <div className="flex-grow flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trips.slice(startIndex, startIndex + tripsToShow).map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
              {startIndex + tripsToShow >= trips.length &&
                trips
                  .slice(0, (startIndex + tripsToShow) % trips.length)
                  .map((trip) => <TripCard key={trip.id} trip={trip} />)}
            </div>
          </div>
          <button onClick={nextTrips} className="p-2 ">
            <FaChevronCircleRight size={30} />
          </button>
        </div>

        {/* Dots navigation based on the number of trips */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {trips.map((_, tripIndex) => (
              <div
                key={tripIndex}
                onClick={() => goToTrip(tripIndex)}
                className={`w-2 h-2 cursor-pointer rounded-full ${
                  startIndex === tripIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;