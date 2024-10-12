import React from 'react';
// Import the image from your src folder
import highLevelLogo from '../img/tcs.png';
import logo8 from "../img/ujj-logo.jpeg";

const HighLevelCorporateTour = () => {
  return (
    <>
    <div className="bg-white mb-48">
      {/* Title */}
      <div className="text-center py-8">
        <header className="w-full bg-white p-6 shadow-md text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Partners We've <span className="text-blue-500">Thrilled</span>
          </h1>
        </header>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 max-h-[120vh]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-4">
              {/* Logo or Icon */}
              <img 
                src={highLevelLogo}  // Reference the imported image here
                alt="HighLevel Logo" 
                className="h-10 sm:h-12 mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold">TCS: Tata Consultancy Services</h2>
              <p className="mt-2 text-gray-300">
                A global leader in IT services, consulting, and business solutions, leverages technology for business transformation and helps catalyze change.
              </p>
            </div>

            {/* Details */}
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="material-icons">Place</span>
                  <span className="ml-2">Rajasthan</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons">Peoples</span>
                  <span className="ml-2">70+ People</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Video Embed) */}
          <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full">
            <iframe
              width="100%"
              height="250"
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-36 lg:translate-y-44 bg-white text-blue-900 p-4 sm:p-6 rounded-lg shadow-lg max-w-lg sm:max-w-2xl w-[90%]">
          <h3 className="text-lg sm:text-xl font-bold">Corporate Tour: TCS</h3>
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

    <div className="bg-white mb-48">
      {/* Title */}

      {/* Main Content Section */}
      <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 max-h-[120vh]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-4">
              {/* Logo or Icon */}
              <img 
                src={logo8}  // Reference the imported image here
                alt="HighLevel Logo" 
                className="h-10 sm:h-12 mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold">Ujjivan Small Finance Bank Limited</h2>
              <p className="mt-2 text-gray-300">
              Ujjivan new SFB offers a wide range of banking services online to meet all financial needs, including individual loans, insurance, savings account, 
Ujjivan Small Finance Bank Limited is an Indian small finance bank based in Bangalore, 
              </p>
            </div>

            {/* Details */}
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="material-icons">Place</span>
                  <span className="ml-2">Delhi Gurgaon(Lohagarh Farm)</span>
                </div>
                <div className="flex items-center">
                  <span className="material-icons">Peoples</span>
                  <span className="ml-2">75+ People</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Video Embed) */}
          <div className="flex-1 mt-8 lg:mt-0 lg:max-w-lg w-full">
            <iframe
              width="100%"
              height="250"
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-36 lg:translate-y-44 bg-white text-blue-900 p-4 sm:p-6 rounded-lg shadow-lg max-w-lg sm:max-w-2xl w-[90%]">
          <h3 className="text-lg sm:text-xl font-bold">Corporate Tour: TCS</h3>
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
    </>
  );
};

export default HighLevelCorporateTour;
