import React, { useEffect, useState } from "react";
import axios from "axios";

const HighLevelCorporateTour = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/corporate/partners-get"
      );
      setPartners(res.data.data);
    } catch (error) {
      console.error("Error fetching partners data:", error);
    }
  };

  // Function to convert YouTube link to embed format
  const getEmbedUrl = (youtubeLink) => {
    const videoId = youtubeLink.split("v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="bg-white">
      {/* Title */}
      <div className="text-center py-8">
        <header className="w-full bg-white text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center leading-tight sm:text-xl">
            Partners We've <span className="text-blue-500">Thrilled</span>
          </h1>
        </header>
      </div>

      {/* Main Content Section */}
      {partners.length > 0 ? (
        partners.map((partner) => (
          <div
            key={partner._id}
            className="relative bg-[#03346e] mb-20 text-white py-10 sm:py-16 top-10 max-h-[120vh]"
          >
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
              {/* Left Content */}
              <div className="flex-1">
                <div className="mb-4">
                  {/* Logo */}
                  {partner.logo && partner.logo.length > 0 && (
                    <img
                      src={partner.logo} // Accessing the first logo in the array
                      alt={partner.heading}
                      className="h-10 sm:h-12 mb-4"
                    />
                  )}
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {partner.heading}
                  </h2>
                  <p className="mt-2 text-gray-300">{partner.description}</p>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex items-center">
                      <span className="material-icons">Place</span>
                      <span className="ml-2">{partner.place}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons">People</span>
                      <span className="ml-2">{partner.people}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content (Video Embed) */}
              <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full">
                <iframe
                  width="100%"
                  height="250"
                  src={getEmbedUrl(partner.youtubeLink)}
                  title={`${partner.heading} YouTube video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading partners data...</p>
        </div>
      )}
    </div>
  );
};

export default HighLevelCorporateTour;
