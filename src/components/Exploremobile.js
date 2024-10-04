import React from "react";
import img1 from "../img/dubai.jpg";
import img2 from "../img/Maldives.jpg";
import img3 from "../img/Europe.jpg";

const ExploreMobile = () => {
  const trips = [
    { title: "Group Trips", img: img1 },
    { title: "International Trips", img: img2 },
    { title: "Explore India", img: img3 },
  ];

  return (
    <div className="bg-white py-6 px-4">
      <h2 className="text-xl font-bold text-left mb-4">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={trip.img}
              alt={trip.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-base font-medium text-center">{trip.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMobile;
