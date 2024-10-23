import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tripData, setTripData] = useState([]);
  const navigate = useNavigate();
  const fetchSearch = () => {
    fetch("http://localhost:5000/api/home/search", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTripData(data.tripData);
        const allTripNames = data.tripData.flatMap((item) => item.tripNames);
        setSuggestions(allTripNames);
      })
      .catch((error) => console.error("Error fetching search data:", error));
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    if (query.length > 0) {
      const filteredSuggestions = suggestions.filter((tripName) =>
        tripName.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      fetchSearch(); // Re-fetch all suggestions if the input is empty
    }
  };

  const handleSuggestionClick = (tripName) => {
    const selectedTrip = tripData.find((item) =>
      item.tripNames.includes(tripName)
    );

    if (selectedTrip) {
      const { stateName, source } = selectedTrip;
      let path = "";

      if (source === "National") {
        path = `/trip/${tripName}/${stateName}`;
      } else if (source === "International") {
        path = `/trips/${tripName}/${stateName}`;
      } else if (source === "Honeymoon") {
        path = `/honeymoon/${tripName}/${stateName}`;
      }
      navigate(path);
    }
    setSearch(tripName);
    setSuggestions([]);
  };

  return (
    <div className="relative flex items-center ml-4 mr-4 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search Places."
        className="pl-6 pr-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 w-full transition-all duration-200 text-black"
      />
      <FaSearch className="absolute right-5 text-gray-800 z-10" />
      {search && suggestions.length > 0 && (
        <ul className="absolute top-full mt-2 w-full bg-white text-black border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
          {suggestions.slice(0, 5).map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-[#a6d5f9]"
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
