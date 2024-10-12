import React from "react";
import logo1 from "../img/sh-uni-logo.png";
import imgcloud from "../img/cloud.jpg";
import logo2 from "../img/ut-uni-logo.png";
import logo3 from "../img/mir-hou-logo.png";

const HighLevelCorporateTour = () => {
  return (
    <>
      <div className="bg-white mb-40">
      <div className="text-center py-8">
          <header className="w-full bg-white p-6 shadow-md text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">
            Organizations We've  <span className="text-blue-500">Empowered</span>
            </h1>
          </header>
        </div>
        {/* Main Content Section */}
        <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 h-[900px] sm:h-[850px] lg:h-[600px] overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-4">
                {/* Logo or Icon */}
                <img
                  src={logo3}
                  alt="HighLevel Logo"
                  className="h-20 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Miranda House(DU)
                </h2>
                <p className="mt-2 text-gray-300">
                  It is one of the Delhi University's top-tier girls
                  institutions and is situated on the north campus's GC Narang
                  Road, New Delhi. Miranda House is a constituent college for
                  women at the University of Delhi in India. Established in
                  1948, it is one of the top ranked colleges of the country and
                  ranked number 1 for consecutively seven years.
                </p>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <span className="material-icons">Place</span>
                    <span className="ml-2">Delhi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons">Peoples</span>
                    <span className="ml-2"> 100+ People</span>
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
      </div>
      <div className="bg-white mb-40">
        {/* Main Content Section */}
        <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 h-[900px] sm:h-[850px] lg:h-[600px] overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-4">
                {/* Logo or Icon */}
                <img
                  src={logo2}
                  alt="HighLevel Logo"
                  className="h-20 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Utkal University
                </h2>
                <p className="mt-2 text-gray-300">
                  Utkal University is a public university in Bhubaneswar,
                  Khordha, Odisha, and is the oldest university in the state,
                  and the 17th-oldest university in India. The university was
                  established in 1943 and was operating from Ravenshaw College
                  in the early days.
                </p>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <span className="material-icons">Place</span>
                    <span className="ml-2"> Rajasthan</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons">Peoples</span>
                    <span className="ml-2">70+ People</span>
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
      </div>
      <div className="bg-white mb-40">
        {/* Main Content Section */}
        <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 h-[900px] sm:h-[850px] lg:h-[600px] overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-4">
                {/* Logo or Icon */}
                <img
                  src={logo1}
                  alt="HighLevel Logo"
                  className="h-20 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Sharda University
                </h2>
                <p className="mt-2 text-gray-300">
                  Sharda University is the Best Private University in Delhi NCR.
                  The University offers a plethora of courses in different
                  streams at UG, PG, and doctoral. Sharda University is a
                  private university in Greater Noida, Uttar Pradesh, India. The
                  university has been accredited with A+ Grade by the NAAC in
                  2022. It is part of the Sharda Group of Institutions founded
                  by P.K. Gupta and Y.K. Gupta in 1996.
                </p>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <span className="material-icons">Place</span>
                    <span className="ml-2">Jibhi-Tirthan Valley</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons">Peoples</span>
                    <span className="ml-2">85+ People</span>
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
      </div>
    </>
  );
};

export default HighLevelCorporateTour;
