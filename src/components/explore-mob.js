import React, { useEffect, useState } from "react";
import axios from "axios";

const TravelOptions = () => {
  const [adventures, setAdventures] = useState([]);

  const fetchAdventures = async () => {
    try {
      const res = await axios.get(
        "https://api.travello10.com/api/home/explore-adventure"
      );
      setAdventures(res.data);
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };

  useEffect(() => {
    fetchAdventures();
  }, []);

  // Function to map adventure titles to corresponding routes
  const getAdventureLink = (title) => {
    switch (title) {
      case "Experience India":
        return "/national";
      case "Weekend Trips":
        return "/Weekends";
      case "Group Trips":
        return "/Grouptours";
      case "International":
        return "/intern";
      case "Romantic Escapes":
        return "/Honeymoon";
      case "Corporate Trips":
        return "/Corporate";
      case "Team Adventures":
        return "/schooltour";
      default:
        return "#";
    }
  };

  return (
    <div className="w-full explore-mob-wrper bg-white h-auto px-4 mb-12 block md:hidden lg:block">
      <h1 className="text-center text-lg font-bold mb-6">
        Explore Your Adventure
      </h1>

      {/* Flex layout with flex-wrap to wrap content if it overflows */}
      <div className="flex flex-wrap justify-center gap-4 mx-auto">
        {adventures.map((adventure) => (
          <a
            key={adventure._id}
            href={getAdventureLink(adventure.title)}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 flex justify-center items-center overflow-hidden rounded-full">
              <img
                src={adventure.image[0]}
                alt={adventure.title}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="mt-1 text-center text-xs font-semibold">
              {adventure.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TravelOptions;
