import React, { useState } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";
const states = [
  { stateName: "Kashmir" },
  { stateName: "Andaman" },
  { stateName: "Kerala" },
  { stateName: "Manali" },
  { stateName: "Bali" },
  { stateName: "Thailand" },
  { stateName: "Vietnam" },
  { stateName: "Maldives" },
];

const AddHoneymoon = () => {
  const [stateName, setStateName] = useState("");
  const [tripDetails, setTripDetails] = useState({
    tripName: "",
    tripPrice: "",
    tripDate: [""],
    tripLocation: "",
    tripDuration: "",
    tripInclusions: [""],
    tripExclusions: [""],
    tripItinerary: [{ title: "", points: [""] }],
    sharing: [{ title: "Double", price: 0 }],
    otherInfo: [{ title: "", points: [""] }],
    tripImages: [""],
    pdf: null,
    tripDescription: "",
    tripBackgroundImg: "",
    pickAndDrop: "",
    status: "active",
    overView: "",
  });

  // Generic handler to update dynamic arrays like inclusions, exclusions, and itinerary
  const handleArrayChange = (e, index, arrayName, subField = null) => {
    const updatedArray = [...tripDetails[arrayName]];
    if (subField) {
      updatedArray[index][subField] = e.target.value;
    } else {
      updatedArray[index] = e.target.value;
    }
    setTripDetails({ ...tripDetails, [arrayName]: updatedArray });
  };

  // Add a new empty item to the given array field (inclusions, exclusions, itinerary)
  const handleAddItem = (arrayName, emptyItem) => {
    setTripDetails({
      ...tripDetails,
      [arrayName]: [...tripDetails[arrayName], emptyItem],
    });
  };

  // Remove an item from a dynamic array like inclusions, exclusions, itinerary
  const handleRemoveItem = (index, arrayName) => {
    const updatedArray = [...tripDetails[arrayName]];
    updatedArray.splice(index, 1);
    setTripDetails({ ...tripDetails, [arrayName]: updatedArray });
  };

  // Handle adding a new trip date
  const addTripDate = () => {
    setTripDetails({
      ...tripDetails,
      tripDate: [...tripDetails.tripDate, ""],
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        tripDetails.tripImages.length > 0 &&
        typeof tripDetails.tripImages[0] === "object"
      ) {
        throw new Error("Invalid tripImages");
      }
      if (
        tripDetails.pdf.length > 0 &&
        typeof tripDetails.pdf[0] === "object"
      ) {
        throw new Error("Invalid pdf");
      }
      if (typeof tripDetails.tripBackgroundImg === "object") {
        throw new Error("Invalid tripBackgroundImg");
      }
      const response = await axios.post(
        "http://localhost:5000/api/honeymoon/add-honeymoon-package",
        {
          stateName,
          trips: [tripDetails],
        }
      );

      if (response.status === 200) {
        alert("Honeymoon package added successfully!");
      }
    } catch (error) {
      console.error("Error adding honeymoon package:", error);
    }
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files).map((file) => file.name);
    setTripDetails({ ...tripDetails, tripImages: images });
  };
  const handlePackageChange = (e) => {
    const image = e.target.files[0].name;
    setTripDetails({ ...tripDetails, tripBackgroundImg: image });
  };
  const handlePdfChange = (e) => {
    const pdf = e.target.files[0].name;
    setTripDetails({ ...tripDetails, pdf: pdf });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Add Honeymoon Package</h2>
      <form onSubmit={handleSubmit}>
        {/* State Name */}
        <div className="mb-4">
          <label className="block text-gray-700">State Name</label>
          <select
            type="text"
            name="stateName"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Place</option>
            {states?.map((state) => (
              <option value={state.stateName}>{state.stateName}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trip Name</label>
          <input
            type="text"
            name="tripName"
            value={tripDetails.tripName}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, tripName: e.target.value })
            }
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trip Price:</label>
          <input
            type="text"
            name="tripPrice"
            value={tripDetails.tripPrice}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, tripPrice: e.target.value })
            }
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Pick and Drop (eg. Guwahati - Guwahati)
          </label>
          <input
            type="text"
            name="pickAndDrop"
            value={tripDetails.pickAndDrop}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, pickAndDrop: e.target.value })
            }
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Trip Overview */}
        <div className="mb-4">
          <label className="block text-gray-700">
            Trip OverView(Guwahati - Shillong - Cherrapunjee - Shnongpdeng -
            Shillong - Guwahati)
          </label>
          <input
            type="text"
            name="overView"
            value={tripDetails.overView}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, overView: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-l">
            Trip Duration (in days eg. 3D - 2N)
          </label>
          <input
            type="text"
            name="tripDuration"
            value={tripDetails.tripDuration}
            onChange={(e) =>
              setTripDetails({ ...tripDetails, tripDuration: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-l">Trip Description</label>
          <input
            type="text"
            name="tripDescription"
            value={tripDetails.tripDescription}
            onChange={(e) =>
              setTripDetails({
                ...tripDetails,
                tripDescription: e.target.value,
              })
            }
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        {/* Trip Dates */}
        <div className="mb-4">
          <label className="block text-gray-700">Trip Dates:</label>
          {tripDetails.tripDate.map((date, index) => (
            <div key={index} className="flex items-center">
              <input
                type="date"
                value={date}
                onChange={(e) => handleArrayChange(e, index, "tripDate")}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={addTripDate}
                className="ml-2 p-1 text-white bg-green-600 rounded"
              >
                +
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic inputs Sharing Options */}
        <div className="mb-4">
          <label className="block text-gray-700">Sharing Options</label>
          {tripDetails.sharing.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              {/* Dropdown for Sharing Type */}
              <select
                value={option.title}
                onChange={(e) =>
                  handleArrayChange(e, index, "sharing", "title")
                }
                className="w-1/3 p-2 border border-gray-300 rounded"
              >
                <option value="">Select Sharing Type</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
              </select>

              {/* Input for Price */}
              <input
                type="number"
                value={option.price}
                onChange={(e) =>
                  handleArrayChange(e, index, "sharing", "price")
                }
                placeholder="Price"
                className="w-1/3 p-2 border border-gray-300 rounded ml-2"
              />

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => handleRemoveItem(index, "sharing")}
                className="ml-2 text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          {/* Add New Sharing Option */}
          <button
            type="button"
            onClick={() => handleAddItem("sharing", { title: "", price: "" })}
            className="text-green-600 mt-2"
          >
            <FaPlus /> Add Sharing Option
          </button>
        </div>

        {/* Dynamic Inputs: Trip Inclusions */}
        <div className="mb-4">
          <label className="block text-gray-700">Trip Inclusions:</label>
          {tripDetails.tripInclusions.map((inclusion, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={inclusion}
                onChange={(e) => handleArrayChange(e, index, "tripInclusions")}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem(index, "tripInclusions")}
                className="ml-2 text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem("tripInclusions", "")}
            className="text-green-600 mt-2"
          >
            <FaPlus /> Add Inclusion
          </button>
        </div>

        {/* Dynamic Inputs: Trip Exclusions */}
        <div className="mb-4">
          <label className="block text-gray-700">Trip Exclusions:</label>
          {tripDetails.tripExclusions.map((exclusion, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={exclusion}
                onChange={(e) => handleArrayChange(e, index, "tripExclusions")}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem(index, "tripExclusions")}
                className="ml-2 text-red-600"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem("tripExclusions", "")}
            className="text-green-600 mt-2"
          >
            <FaPlus /> Add Exclusion
          </button>
        </div>

        {/* Trip Itinerary */}
        <div className="mb-4">
          <label className="block text-gray-700">Trip Itinerary:</label>
          {tripDetails.tripItinerary.map((itinerary, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Itinerary Title"
                  value={itinerary.title}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripItinerary", "title")
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index, "tripItinerary")}
                  className="ml-2 text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
              <div className="ml-4 mt-2">
                <label className="block text-gray-600">Points:</label>
                {itinerary.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => {
                        const updatedItinerary = [...tripDetails.tripItinerary];
                        updatedItinerary[index].points[pointIndex] =
                          e.target.value;
                        setTripDetails({
                          ...tripDetails,
                          tripItinerary: updatedItinerary,
                        });
                      }}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedItinerary = [...tripDetails.tripItinerary];
                        updatedItinerary[index].points.splice(pointIndex, 1);
                        setTripDetails({
                          ...tripDetails,
                          tripItinerary: updatedItinerary,
                        });
                      }}
                      className="ml-2 text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const updatedItinerary = [...tripDetails.tripItinerary];
                    updatedItinerary[index].points.push("");
                    setTripDetails({
                      ...tripDetails,
                      tripItinerary: updatedItinerary,
                    });
                  }}
                  className="text-green-600 mt-2"
                >
                  <FaPlus /> Add Point
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              handleAddItem("tripItinerary", { title: "", points: [""] })
            }
            className="text-green-600 mt-2"
          >
            <FaPlus /> Add Itinerary Item
          </button>
        </div>

        <div>
          <label className="block text-l font-medium">
            Trip Images (i.e. Card Image)
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        <div>
          <label className="block text-l font-medium">
            Package Image ( i.e. Background Image )
          </label>
          <input
            type="file"
            onChange={handlePackageChange}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        <div>
          <label className="block text-l font-medium">
            Upload PDF ( i.e. Itinerary )
          </label>
          <input
            type="file"
            onChange={handlePdfChange}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit Honeymoon Package
        </button>
      </form>
    </div>
  );
};

export default AddHoneymoon;
