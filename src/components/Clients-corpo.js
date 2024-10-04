import React from 'react';
import logo1 from "../img/sh-uni-logo.png";
import logo2 from "../img/mir-hou-logo.png";
import logo3 from "../img/ut-uni-logo.png";
import logo4 from "../img/ma-ag-logo.png";
import logo5 from "../img/lloyd-logo.jpeg";
import logo6 from "../img/hcl-logo.jpeg";
import logo7 from "../img/tata-logo.png";
import logo8 from "../img/ujj-logo.jpeg";
import logo9 from "../img/sumo-logo.jpeg";

const ClienteleHallOfFame = () => {
  const clients = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
    { logo: logo9 },
  ];

  return (
    <div className="p-8 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">
        Our Clientele <span className="text-gray-800">Hall of Fame</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={client.logo}
              alt={`Client logo ${index + 1}`}
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-32 object-contain mb-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleHallOfFame;
