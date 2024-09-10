import React, { useEffect, useState } from "react";
import { GiClockwork } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import img1 from "../../img/goa.png";
function AllPackagesCard() {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const response = await fetch(
          "https://travel-server-iley.onrender.com/api/user/getTripDetails"
        );
        const data = await response.json();
        setTrips(data)
        console.log(trips)
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchAllPackages();
  }, []);
  const packageData = [
    {
      title: "Spiti Summer Adventure",
      location: "Himachal Pradesh",
      duration: "5N/6D",
      date: "6 Sep, 2024",
      price: "₹ 12,000/- onwards",
    },
    {
      title: "Spiti Summer Adventure",
      location: "Himachal Pradesh",
      duration: "5N/6D",
      date: "6 Sep, 2024",
      price: "₹ 12,000/- onwards",
    },
    {
      title: "Spiti Summer Adventure",
      location: "Himachal Pradesh",
      duration: "5N/6D",
      date: "6 Sep, 2024",
      price: "₹ 12,000/- onwards",
    },
    {
      title: "Spiti Summer Adventure",
      location: "Himachal Pradesh",
      duration: "5N/6D",
      date: "6 Sep, 2024",
      price: "₹ 12,000/- onwards",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
      {packageData.map((pkg, index) => (
        <div
          key={index}
          className="h-[450px] relative shadow-lg rounded-lg mb-20 flex justify-center items-center cursor-pointer"
        >
          <img
            src={img1}
            alt={pkg.title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-3 right-3 bg-yellow-300 border-2 border-white pl-2 pr-2 p-1 rounded-full w-auto flex items-center justify-center">
            <span className="font-bold text-sm ">{pkg.price}</span>
          </div>
          <div className="w-full p-2 rounded-lg flex flex-col md:flex-row absolute bottom-0 bg-black">
            <div className="w-full">
              <h2 className="text-xs font-bold text-white mb-10">
                {pkg.title}
              </h2>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex items-center text-gray-600 mb-2">
                  <GiClockwork className="mr-2 text-blue-500" />
                  <span className="text-white text-xs">{pkg.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <span className="text-white text-xs">{pkg.date}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <MdLocationOn className="mr-2 text-blue-500" />
                <span className="text-white text-xs">{pkg.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPackagesCard;