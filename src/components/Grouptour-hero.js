import React, { useEffect, useState } from "react";
import { MdLocationPin, MdPeople } from "react-icons/md";

const HighLevelCorporateTour = () => {
  const [groupDetails, setGroupDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroupDetails();
  }, []);

  const fetchGroupDetails = async () => {
    try {
      const response = await fetch(
        `https://api.travello10.com/api/group-tours/group-details`
      );
      const result = await response.json();

      if (result.data) {
        // Filter data where type is "School"
        const filteredData = result.data.filter(
          (tour) => tour.type === "University"
        );
        setGroupDetails(filteredData);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching group details:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="text-center py-8">
        <header className="w-full bg-white p-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Organizations We've <span className="text-blue-500">Empowered</span>
          </h1>
        </header>
      </div>

      {groupDetails.map((tour) => (
        <div
          key={tour._id}
          className="relative bg-[#03346e] text-white py-10 sm:py-16 my-10 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold">{tour.name}</h2>
                <p className="mt-2 text-gray-300">
                  {tour.description.join(" ")}
                </p>
                <p className="mt-2">Duration: {tour.duration}</p>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex p-2 border border-gray-300 rounded-md items-center">
                    <MdLocationPin />
                    <span className="ml-1">Delhi</span>
                  </div>
                  <div className="flex p-2 border border-gray-300 rounded-md items-center">
                    <MdPeople className="text-xl" />
                    <span className="ml-1">{tour.numberOfPax} People</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full overflow-hidden relative">
              <img
                src={tour.image[0]}
                alt={tour.name}
                className="rounded-lg shadow-lg w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] object-cover max-w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighLevelCorporateTour;
