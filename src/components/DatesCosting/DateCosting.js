import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../Nav";

const DateCosting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    tripDates: tripDatesFromState = [],
    tripPrice = 0,
    costingDetails,
    tripName,
    doubleSharing,
    tripleSharing,
    quadSharing,
  } = location.state || {};

  const tripDates = tripDatesFromState.map((date) => ({
    date,
    price: tripPrice,
    tripName,
    doubleSharing,
    tripleSharing,
    quadSharing,
    status: "Available",
  }));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const groupDatesByMonth = (dates) => {
    return dates.reduce((acc, dateObj) => {
      const date = new Date(dateObj.date);
      if (isNaN(date)) {
        return acc;
      }
      const month = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(dateObj);
      return acc;
    }, {});
  };

  const datesByMonth = groupDatesByMonth(tripDates);

  const getCurrentMonth = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  };

  const [selectedDate, setSelectedDate] = useState(
    tripDates.length > 0 ? tripDates[0].date : ""
  );
  const [openMonth, setOpenMonth] = useState(getCurrentMonth());

  const toggleMonth = (month) => {
    setOpenMonth(openMonth === month ? "" : month);
  };

  const handleBooking = () => {
    navigate("/booking-options", {
      state: {
        selectedDate,
        tripPrice,
        tripName,

        doubleSharing,
        tripleSharing,
        quadSharing,
      },
    });
  };
  return (
    <div>
      <Nav />
      <div className=" flex flex-col items-center p-4">
        <div className=" flex w-full max-w-4xl mt-16 items-center justify-center flex-col">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Dates and Costing
          </h1>
          <div className="bg-blue-400 p-3 rounded-bl-lg rounded-br-lg">
            <p className="text-white font-semibold text-2xl">{tripName}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="flex w-[70%] mt-10">
          <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center border-b-2 border-gray-500">
              Available Dates
            </h2>
            <div className="space-y-4">
              {Object.keys(datesByMonth).map((month, monthIndex) => (
                <div key={monthIndex} className="mb-6">
                  <div
                    className="cursor-pointer text-lg font-bold mb-2 flex justify-between items-center hover:text-blue-500 transition-all duration-200"
                    onClick={() => toggleMonth(month)}
                  >
                    {month}
                    <span>{openMonth === month ? "▲" : "▼"}</span>
                  </div>
                  {openMonth === month && (
                    <div className="transition-all duration-300">
                      {datesByMonth[month].map((dateObj, index) => (
                        <div
                          key={index}
                          className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer hover:bg-blue-50 mt-4 ${
                            selectedDate === dateObj.date ? "bg-blue-100" : ""
                          }`}
                          onClick={() => setSelectedDate(dateObj.date)}
                        >
                          <div className="flex justify-between items-center">
                            <span>{formatDate(dateObj.date)}</span>
                            <span className="text-sm text-gray-500">
                              {dateObj.status}
                            </span>
                          </div>
                          <div className="text-right text-blue-500 font-bold">
                            Starting Price: {doubleSharing}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className=" p-4 ml-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Costing</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-blue-100 p-4 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    Room Sharing
                  </span>
                  <span className="font-semibold text-gray-700">
                    Cost (Per Person)
                  </span>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span>Double Sharing</span>
                  <span className="text-gray-800">{doubleSharing}</span>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span>Triple Sharing</span>
                  <span className="text-gray-800">{tripleSharing}</span>
                </div>
                <div className="flex justify-between items-center p-4">
                  <span>Quad Sharing</span>
                  <span className="text-gray-800">{quadSharing}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full max-w-4xl mt-6 p-4 bg-white shadow-lg ml-4 rounded-lg">
              <div className="text-xl font-bold text-blue-600">
                Starting Price: ₹{doubleSharing} per person
              </div>
              <button
                onClick={handleBooking} // Handle booking
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Right Section: Costing */}
        </div>
      </div>
    </div>
  );
};

export default DateCosting;
