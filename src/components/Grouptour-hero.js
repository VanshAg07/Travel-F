import React, { useEffect, useState } from "react";
import imgcloud from "../img/cloud.jpg";
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
        `http://localhost:5000/api/group-tours/group-details`
      );
      const result = await response.json();
      if (result.data) {
        setGroupDetails(result.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading group details...</div>;
  }

  return (
    <>
      <div className="bg-white mb-40">
        <div className="text-center py-8">
          <header className="w-full bg-white p-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Organizations We've{" "}
              <span className="text-blue-500">Empowered</span>
            </h1>
          </header>
        </div>

        {groupDetails.map((group) => (
          <div
            key={group._id}
            className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 h-[900px] sm:h-[850px] lg:h-[600px] overflow-hidden mb-40"
          >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
              {/* Left Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {group.name}
                  </h2>
                  <p className="mt-2 text-gray-300">
                    {group.description.join(", ")}
                  </p>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <MdLocationPin />
                      <span className="ml-1">Location TBD</span>{" "}
                      {/* Replace with actual location if available */}
                    </div>
                    <div className="flex items-center">
                      <MdPeople className="text-xl" />
                      <span className="ml-1">{group.numberOfPax}+ People</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content (Responsive Image) */}
              <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full overflow-hidden relative">
                <img
                  src={imgcloud}
                  alt="Image Description"
                  className="rounded-lg shadow-lg w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] object-cover max-w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HighLevelCorporateTour;
