import React from "react";
import kerala from "../img/kerala-mob.png";
import Meghalaya from "../img/meghalaya-mob.png"
import Spitivalley from "../img/spitivalley-mob.png"
import Ladakh from "../img/ladakh-mob.png"
import HimachalPradesh from "../img/HimachalPradesh-mob.png"
import andaman from "../img/andaman-mob.png"
import Rajasthan from "../img/rajasthan-mob.png"
import Kashmir from "../img/kashmir-mob.png"
import Uttrakhand from "../img/uttrakhand-mob.png"
import Sikkim from "../img/sikkim-mob.png"
import "./Explore-mob.css";

const TravelOptions = () => {
  const options = [
    {
      name: "Kerala",
      imgSrc: kerala,
      price: "Starting Price: ₹7,999",
      duration: "3D 2N",
      dates: "Oct 24, Oct 31, Nov 07",
      link: "/national",
    },
    {
      name: "Meghalaya",
      imgSrc: Meghalaya,
      price: "Starting Price: ₹7,999",
      duration: "2D 1N",
      dates: "Nov 14, Nov 21, Nov 28",
      link: "/Weekends",
    },
    {
      name: "Spitivalley",
      imgSrc: Spitivalley,
      price: "Starting Price: ₹8,499",
      duration: "4D 3N",
      dates: "Oct 20, Oct 27, Nov 03",
      link: "/Grouptours",
    },
    {
      name: "Ladakh",
      imgSrc: Ladakh,
      price: "Starting Price: ₹10,999",
      duration: "5D 4N",
      dates: "Nov 15, Nov 22, Dec 01",
      link: "/intern",
    },
    {
      name: "HimachalPradesh",
      imgSrc: HimachalPradesh,
      price: "Starting Price: ₹9,499",
      duration: "6D 5N",
      dates: "Nov 10, Nov 17, Nov 24",
      link: "/Honeymoon",
    },
    {
      name: "Aandaman",
      imgSrc: andaman,
      price: "Starting Price: ₹15,999",
      duration: "7D 6N",
      dates: "Dec 01, Dec 08, Dec 15",
      link: "/Corporate",
    },
    {
      name: "Rajasthan",
      imgSrc: Rajasthan,
      price: "Starting Price: ₹8,499",
      duration: "4D 3N",
      dates: "Oct 20, Oct 27, Nov 03",
      link: "/Grouptours",
    },
    {
      name: "Kashmir",
      imgSrc: Kashmir,
      price: "Starting Price: ₹10,999",
      duration: "5D 4N",
      dates: "Nov 15, Nov 22, Dec 01",
      link: "/intern",
    },
    {
      name: "Uttrakhand",
      imgSrc: Uttrakhand,
      price: "Starting Price: ₹9,499",
      duration: "6D 5N",
      dates: "Nov 10, Nov 17, Nov 24",
      link: "/Honeymoon",
    },
    {
      name: "Sikkim",
      imgSrc: Sikkim,
      price: "Starting Price: ₹15,999",
      duration: "7D 6N",
      dates: "Dec 01, Dec 08, Dec 15",
      link: "/Corporate",
    },
  ];

  return (
    <div className="w-full h-[60vh] px-2 mb-12">
      {/* Heading with custom underline and "See All" anchor */}
      <div className="flex justify-between items-center mb-4 h-[10vh]">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Indian Packages</h1>
          <div className="w-32 border-b-4 border-blue-400 mt-1" />
        </div>
        <a
          href="/all-packages"
          className="text-red-500 text-sm"
        >
          See All
        </a>
      </div>

      {/* Scrollable horizontal section */}
      <div className="overflow-x-auto scrollbar-hide h-[50vh]">
        <div className="flex flex-nowrap space-x-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative travel-card min-w-[220px] sm:min-w-[240px] md:min-w-[250px] max-w-[280px] border-2 border-black rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="h-[30vh]">
                <img
                  src={option.imgSrc}
                  alt={option.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content with rounded bottom */}
              <div className="h-[15vh] p-4 bg-white flex flex-col justify-between">
                <h2 className="font-bold text-lg mb-2">{option.name}</h2>
                <p className="text-sm font-medium text-black">
                  {option.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelOptions;
