import React from 'react';

const HighLevelCorporateTour = () => {
  return (
    <div className="bg-white mb-48">
      {/* Title */}
      <div className="text-center py-8">
      <header className="w-full bg-white p-6 shadow-md text-center">
        <h1 className="text-4xl font-bold">
          Clients We've <span className="text-blue-500">WoWed</span>
        </h1>
      </header>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-blue-900 text-white py-16 top-10 max-h-[120vh]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-8 lg:px-16">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-4">
              {/* Logo or Icon */}
              <img 
                src="/path-to-logo.png" 
                alt="HighLevel Logo" 
                className="h-12 mb-4"
              />
              <h2 className="text-2xl font-bold">HighLevel</h2>
              <p className="mt-2 text-gray-300">
                A white-labeled marketing app that empowers entrepreneurs with powerful tools for marketing, sales, and automation.
              </p>
            </div>

            {/* Details */}
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="material-icons">place</span>
                  <span className="ml-2">Japan</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons">people</span>
                  <span className="ml-2">200+ People</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Video Embed) */}
          <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Overlay Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-44 bg-white text-blue-900 p-6 rounded-lg shadow-lg max-w-2xl">
          <h3 className="text-xl font-bold">Corporate Tour: High Level</h3>
          <p className="text-gray-700 font-light">High Level's Unforgettable Journey To Japan</p>
          <p className="mt-2 text-gray-600">
            In a world where distances are measured in clicks and screens, the power of a face-to-face connection is immeasurable...
          </p>
          <div className="mt-4">
            <span className="text-blue-600 font-bold">Read More...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLevelCorporateTour;