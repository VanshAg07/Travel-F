import React from "react";
// Import the image from your src folder
import highLevelLogo from "../img/tcs.png";
import logo8 from "../img/ujj-logo.jpeg";
import logo9 from "../img/cloud.webp";
import imgcloud from "../img/cloud.jpg";

const HighLevelCorporateTour = () => {
  return (
    <>
      <div className="bg-white mb-40">
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
                  src={highLevelLogo} // Reference the imported image here
                  alt="HighLevel Logo"
                  className="h-10 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  TCS: Tata Consultancy Services
                </h2>
                <p className="mt-2 text-gray-300">
                  A global leader in IT services, consulting, and business
                  solutions, leverages technology for business transformation
                  and helps catalyze change.
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
        </div>
      </div>

      <div className="bg-white mb-40">
        {/* Title */}

        {/* Main Content Section */}
        <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 max-h-[120vh]">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-4">
                {/* Logo or Icon */}
                <img
                  src={logo8} // Reference the imported image here
                  alt="HighLevel Logo"
                  className="h-10 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Ujjivan Small Finance Bank Limited
                </h2>
                <p className="mt-2 text-gray-300">
                  Ujjivan new SFB offers a wide range of banking services online
                  to meet all financial needs, including individual loans,
                  insurance, savings account, Ujjivan Small Finance Bank Limited
                  is an Indian small finance bank based in Bangalore.
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
        </div>
      </div>

      <div className="bg-white mb-40">
        {/* Title */}

        {/* Main Content Section */}
        <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 max-h-[120vh]">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
            {/* Left Content */}
            <div className="flex-1">
              <div className="mb-4">
                {/* Logo or Icon */}
                <img
                  src={logo8} // Reference the imported image here
                  alt="HighLevel Logo"
                  className="h-10 sm:h-12 mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold">Atomy </h2>
                <p className="mt-2 text-gray-300">
                  Amway India is a subsidiary of Amway, the world's no. 1
                  direct-selling company. Amway entered the Indian market in
                  1998. Atomy is a Korean company that distributes the
                  supplement "HemoHIM Plus" and its own brand of premium
                  cosmetics and personal care products made from 100% natural
                  herbal ingredients.
                </p>
              </div>

              {/* Details */}
              <div className="mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <span className="material-icons">Place</span>
                    <span className="ml-2">Delhi-Manali-Kasol-Delhi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="material-icons">Peoples</span>
                    <span className="ml-2">50+ People</span>
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
        </div>
      </div>

      <div className="bg-white mb-40">
  {/* Main Content Section */}
  <div className="relative bg-blue-900 text-white py-10 sm:py-16 top-10 h-[950px] sm:h-[850px] lg:h-[600px] overflow-hidden">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:space-x-12 px-6 lg:px-16">
      {/* Left Content */}
      <div className="flex-1">
        <div className="mb-4">
          {/* Logo or Icon */}
          <img
            src={logo9}
            alt="HighLevel Logo"
            className="h-10 sm:h-12 mb-4"
          />
          <h2 className="text-xl sm:text-2xl font-bold">
            CloudCentric Infotech - Salesforce Partner
          </h2>
          <p className="mt-2 text-gray-300">
            CloudCentric Infotech is an IT Innovative Product, Consulting, and
            Solutions Services providing organization to various Industry
            clients across the globe.
          </p>

          <p className="mt-2 text-gray-300">
            CloudCentric Infotech is a Salesforce Summit Partner helps
            businesses get the most out of their Salesforce implementation.
            With years of experience and a team of experts, we provide
            full-service Salesforce consulting services, advising businesses
            on how to use the world's #1 CRM platform - Salesforce for their
            unique needs.
          </p>
        </div>

        {/* Details */}
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <span className="material-icons">Place</span>
              <span className="ml-2">Delhi-Chakrata-Delhi</span>
            </div>
            <div className="flex items-center">
              <span className="material-icons">Peoples</span>
              <span className="ml-2">65+ People</span>
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
