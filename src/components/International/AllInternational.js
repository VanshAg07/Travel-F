import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function AllInternational() {
  const [packages, setPackages] = useState([]);
  const [visiblePackages, setVisiblePackages] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const response = await fetch(
          "https://api.travello10.com/api/international/get-all-international"
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
    setVisiblePackages((prevVisible) => prevVisible + 6);
  };

  const handlePackageClick = (stateName, tripName) => {
    const sanitizedTripName = tripName.replace(/\//g, "-");
    navigate(
      `/international/${encodeURIComponent(sanitizedTripName)}/${stateName}`
    );
  };

  return (
    <div className="container mx-auto w-[80%]">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
        {packages.length > 0 ? (
          packages.slice(0, visiblePackages).map((pkg, index) =>
            pkg.trips.map((trip, tripIndex) => (
              <div
                key={`${index}-${tripIndex}`}
                className="h-[420px] relative shadow-black shadow-lg rounded-lg mb-10 flex justify-center items-center cursor-pointer"
                onClick={() => handlePackageClick(pkg.stateName, trip.tripName)}
              >
                <img
                  src={
                    trip.tripImages?.length > 0
                      ? trip.tripImages[0]
                      : "fallback-image-url"
                  } // Handle image mapping
                  alt={trip.tripName}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
                  <span className="font-semibold text-sm ">
                    {trip.customised ? (
                      "Customised"
                    ) : (
                      <>
                        <span className="relative mr-1 line-through">
                          {`₹ ${trip.tripPrice}/-`}
                        </span>
                        {`₹${trip.tripOfferPrice}/- onwards`}
                      </>
                    )}
                  </span>
                </div>
                <div className="w-full rounded-b pl-4 pt-2 pr-4 pb-2 flex flex-col md:flex-row absolute bottom-0 bg-white">
                  <div className="w-full">
                    <h2 className="text-lg uppercase truncate font-semibold text-black pb-6">
                      {trip.tripName}
                    </h2>
                    <div className="flex flex-row mb-4 justify-between items-center w-full">
                      {/* Duration */}
                      <div className="flex items-center text-black">
                        <FaClock className="mr-1 text-black" />
                        <span className="text-black text-xs">
                          {`${trip.tripDuration}`}
                        </span>
                      </div>
                      {/* Location */}
                      <div className="flex items-center text-black">
                        <FaMapMarkerAlt className="mr-1 text-black" />
                        <span className="text-black text-xs">
                          {pkg.stateName}
                        </span>
                      </div>
                    </div>
                    {/* Dates */}
                    <div className="flex items-center mb-2 text-black">
                      <FaCalendarAlt className="mr-2 text-black" />
                      <span className="text-black text-xs">
                        {/* Format the date */}
                        {new Date(trip.tripDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      {trip.tripDateCount >= 0 && (
                        <span className="text-xs text-red-500 ml-1">
                          +{trip.tripDateCount}
                          <span className="ml-1">Batches</span>
                        </span>
                      )}
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

      {visiblePackages < packages.length && (
        <div className="flex justify-center mb-6">
          <button
            onClick={loadMorePackages}
            className="px-6 py-2 bg-[#03346e] text-white text-lg font-semibold rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllInternational;
