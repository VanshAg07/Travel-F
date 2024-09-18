import React, { useEffect, useState } from "react";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import img1 from "../../img/goa.png";

function AllPackagesCard() {
  const [packages, setPackages] = useState([]);
  const [visiblePackages, setVisiblePackages] = useState(6);

  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/getTripDetails"
        );
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchAllPackages();
  }, []);

  const loadMorePackages = () => {
    setVisiblePackages(prevVisible => prevVisible + 6);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {packages.length > 0 ? (
          packages.slice(0, visiblePackages).map((pkg, index) =>
            pkg.trips.map((trip, tripIndex) => (
              <div
                key={`${index}-${tripIndex}`}
                className="h-[450px] relative shadow-lg rounded-lg mb-20 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={img1}
                  alt={trip.tripName}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
                  <span className="font-bold text-sm ">{`₹ ${trip.tripPrice}`}</span>
                </div>
                <div className="w-full p-2 rounded-lg flex flex-col md:flex-row absolute bottom-0 bg-black">
                  <div className="w-full">
                    <h2 className="text-xs font-bold text-white mb-10">
                      {pkg.stateName} - {trip.tripName}
                    </h2>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex items-center text-gray-600 mb-2">
                        <GiClockwork className="mr-2 text-blue-500" />
                        <span className="text-white text-xs">
                          {`${trip.tripDuration} Days`}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        <span className="text-white text-xs">
                          {new Date(trip.tripDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MdLocationOn className="mr-2 text-blue-500" />
                      <span className="text-white text-xs">
                        {trip.tripLocation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          <p>No packages available</p>
        )}
      </div>

      {/* Load More button */}
      {visiblePackages < packages.length && (
        <div className="flex justify-center mb-6">
          <button
            onClick={loadMorePackages}
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllPackagesCard;
