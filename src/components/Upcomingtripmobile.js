import React from "react";
import kerala from "../img/kerala-mob.png";
import Meghalaya from "../img/meghalaya-mob.png";
import Spitivalley from "../img/spitivalley-mob.png";
import Ladakh from "../img/ladakh-mob.png";
import HimachalPradesh from "../img/HimachalPradesh-mob.png";
import andaman from "../img/andaman-mob.png";
import Rajasthan from "../img/rajasthan-mob.png";
import Kashmir from "../img/kashmir-mob.png";
import Uttrakhand from "../img/uttrakhand-mob.png";
import Sikkim from "../img/sikkim-mob.png";
import TripDetailCard from './Tripdetail'; 
import "./Explore-mob.css";

const TravelOptions = () => {
  const options = [
    {
      name: "Kerala",
      imgSrc: kerala,
      price: "₹7,999",
      duration: "3D/2N",
      dates: "Oct 24, Oct 31, Nov 28",
      location: "Delhi to Delhi",
    },
    {
      name: "Meghalaya",
      imgSrc: Meghalaya,
      price: "₹7,999",
      duration: "2D/1N",
      dates: "Nov 14, Nov 21, Nov 28",
      location: "Delhi to Delhi",
    },
    {
      name: "Spitivalley",
      imgSrc: Spitivalley,
      price: "₹8,499",
      duration: "4D/3N",
      dates: "Oct 20, Oct 27, Nov 03",
      location: "Delhi to Delhi",
    },
    {
      name: "Ladakh",
      imgSrc: Ladakh,
      price: "₹10,999",
      duration: "5D/4N",
      dates: "Nov 15, Nov 22, Dec 01",
      location: "Delhi to Delhi",
    },
    {
      name: "HimachalPradesh",
      imgSrc: HimachalPradesh,
      price: "₹9,499",
      duration: "6D/5N",
      dates: "Nov 10, Nov 17, Nov 24, Nov 24, Nov 24, Nov 24",
      location: "Delhi to Delhi",
    },
    {
      name: "Andaman",
      imgSrc: andaman,
      price: "₹15,999",
      duration: "7D/6N",
      dates: "Dec 01, Dec 08, Dec 15",
      location: "Delhi to Delhi",
    },
    {
      name: "Rajasthan",
      imgSrc: Rajasthan,
      price: "₹8,499",
      duration: "4D/3N",
      dates: "Oct 20, Oct 27, Nov 03",
      location: "Delhi to Delhi",
    },
    {
      name: "Kashmir",
      imgSrc: Kashmir,
      price: "₹10,999",
      duration: "5D/4N",
      dates: "Nov 15, Nov 22, Dec 01",
      location: "Delhi to Delhi",
    },
    {
      name: "Uttrakhand",
      imgSrc: Uttrakhand,
      price: "₹9,499",
      duration: "6D/5N",
      dates: "Nov 10, Nov 17, Nov 24",
      location: "Delhi to Delhi",
    },
    {
      name: "Sikkim",
      imgSrc: Sikkim,
      price: "₹15,999",
      duration: "7D/6N",
      dates: "Dec 01, Dec 08, Dec 15",
      location: "Delhi to Delhi",
    },
  ];

  return (
    <div className="w-full bg-[#ffffe6] mt-10 h-[80vh] px-2 mb-12">
      <div className="flex justify-between items-center mb-4 h-[10vh]">
        <div className="flex ml-4 flex-col">
          <h1 className="text-lg font-bold">Upcoming Trips</h1>
          <div className="w-32 border-b-4 border-blue-400 mt-1" />
        </div>
        {/* <a
          href="/all-packages"
          className="text-red-500 mr-4 text-sm"
        >
          See All
        </a> */}
      </div>

      {/* Month selection section */}
      <div className="flex flex-row w-[60%] justify-between space-x-3 mb-4">
        {["OCT", "NOV", "DEC", "JAN", "FEB", "MAR"].map((month) => (
          <button 
            key={month} 
            className="p-1 w-16 h-8 flex justify-center text-sm items-center text-center bg-white border border-black rounded-lg"
          >
            {month}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto scrollbar-hide h-[60vh]">
        <div className="flex flex-nowrap space-x-2">
          {options.map((option, index) => {
            const datesArray = option.dates.split(", "); // Split dates into an array
            const displayDates = datesArray.slice(0, 2); // Get the first two dates
            const batchCount = datesArray.length > 2 ? `+${datesArray.length - 2} Batches` : ""; // Count remaining dates for batches

            return (
              <div key={index} className="relative border-2 border-black rounded-lg shadow-md min-w-[240px]">
                <img
                  src={option.imgSrc}
                  alt={option.name}
                  className="w-full h-[34vh] object-cover rounded-t-lg"
                />
                <TripDetailCard 
                  trip={{ 
                    ...option, 
                    dates: displayDates.join(", "), // Join the displayed dates
                    batches: batchCount, // Set the batches based on count
                  }} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelOptions;
