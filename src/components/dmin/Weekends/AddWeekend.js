import React, { useState } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";
const states = [
  { _id: "6707ce4042f18b18911cdd7b", stateName: "Manali Kasol Kheerganga" },
  { _id: "6707ccdb42f18b18911cdd69", stateName: "Manali Solang Kasol" },
  { _id: "6707ce5f42f18b18911cdd7d", stateName: "Kasol Kheerganga" },
  { _id: "6707cd0142f18b18911cdd6d", stateName: "Manali Kasol Kalga" },
  { _id: "6707ce8a42f18b18911cdd7f", stateName: "Jibhi Tirthanvalley" },
  { _id: "6707cd6542f18b18911cdd73", stateName: "Udaipur" },
  { _id: "6707cd9342f18b18911cdd75", stateName: "Chopta Tungnath" },
  { _id: "6707cdc242f18b18911cdd77", stateName: "Spiti Valley" },
  { _id: "6707cddf42f18b18911cdd79", stateName: "Shimla Manali" },
];

const AddWeekend = () => {
  const [selectedState, setSelectedState] = useState("");

  const [tripDetails, setTripDetails] = useState({
    tripName: "",
    tripPrice: "",
    tripLocation: "",
    tripDate: [""],
    tripDuration: "",
    tripInclusions: [""],
    tripExclusions: [""],
    tripItinerary: [{ title: "", points: [""] }],
    tripImages: [""],
    pdf: null,
    tripDescription: "",
    tripBackgroundImg: "",
    pickAndDrop: "",
    status: "active",
    overView: "",
    sharing: [{ title: "", price: "" }],
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

  // Handle form submission
  const handleSubmit = async (e) => {
    if (!selectedState) {
      alert("Please select a state before submitting the form.");
      return;
    }
    console.log(selectedState);
    e.preventDefault();

    const formData = new FormData();
    Object.keys(tripDetails).forEach((key) => {
      if (key === "tripImages") {
        tripDetails.tripImages.forEach((image) => {
          formData.append("tripImages", image);
        });
      } else if (key === "pdf" && tripDetails.pdf) {
        formData.append("pdf", tripDetails.pdf);
      } else if (key === "tripBackgroundImg" && tripDetails.tripBackgroundImg) {
        formData.append("tripBackgroundImg", tripDetails.tripBackgroundImg);
      } else if (Array.isArray(tripDetails[key])) {
        if (key === "tripItinerary") {
          tripDetails.tripItinerary.forEach((item, index) => {
            formData.append(`${key}[${index}][title]`, item.title);
            item.points.forEach((point, pointIndex) => {
              formData.append(`${key}[${index}][points][${pointIndex}]`, point);
            });
          });
        } else if (key === "sharing") {
          tripDetails.sharing.forEach((item, index) => {
            formData.append(`${key}[${index}][title]`, item.title);
            formData.append(`${key}[${index}][price]`, item.price);
          });
        } else {
          tripDetails[key].forEach((item, index) => {
            formData.append(`${key}[${index}]`, item);
          });
        }
      } else {
        formData.append(key, tripDetails[key]);
      }
    });
    fetch(
      `http://localhost:5000/api/weekends/add-weekend-package/${selectedState}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || "Network response was not ok");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Trip submitted successfully", data);
        alert("Trip submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting trip", error);
      });
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setTripDetails({ ...tripDetails, tripImages: images });
  };
  const handlePackageChange = (e) => {
    const image = e.target.files[0];
    setTripDetails({ ...tripDetails, tripBackgroundImg: image });
  };
  const handlePdfChange = (e) => {
    setTripDetails({ ...tripDetails, pdf: e.target.files[0] });
  };

  const handleSharingChange = (e, index, fieldName) => {
    const updatedSharing = [...tripDetails.sharing];
    const sharingObject = updatedSharing[index];
    sharingObject[fieldName] = e.target.value;
    updatedSharing[index] = sharingObject;
    setTripDetails({ ...tripDetails, sharing: updatedSharing });
  };
  const addSharingField = () => {
    setTripDetails({
      ...tripDetails,
      sharing: [...tripDetails.sharing, { title: "", price: "" }],
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Add Weekend Packages</h2>
      <form onSubmit={handleSubmit}>
        {/* State Name */}
        <div className="mb-4">
          <label className="block text-gray-700">State Name</label>
          <select
            type="text"
            name="stateName"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Place</option>
            {states?.map((state) => (
              <option key={state._id} value={state._id}>
                {state.stateName}
              </option>
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
          <label className="block text-gray-700">Trip Price</label>
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
        <div>
          <label className="block text-l font-medium">Trip Dates</label>
          {tripDetails.tripDate.map((date, index) => (
            <div key={index} className="flex items-center">
              <input
                type="date"
                value={date}
                onChange={(e) => handleArrayChange(e, index, "tripDate")}
                className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
              />
              <button
                type="button"
                onClick={() => handleAddItem("tripDate")}
                className="ml-2 p-1 text-white bg-green-600 rounded"
              >
                +
              </button>
            </div>
          ))}
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
        <div>
          <label className="block text-l font-medium">Sharing Options</label>
          {tripDetails.sharing.map((share, index) => (
            <div key={index}>
              <select
                name="title"
                value={share.title}
                placeholder="Sharing Type"
                className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
                onChange={(e) => handleSharingChange(e, index, "title")}
              >
                <option value="">Select Sharing Type</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
                <option value="Quad">Quad</option>
              </select>
              <input
                type="number"
                name="price"
                value={share.price}
                placeholder="Price"
                className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
                onChange={(e) => handleSharingChange(e, index, "price")}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSharingField}
            className="mt-2 p-1 text-white bg-green-600 rounded"
          >
            Add Sharing Options
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

export default AddWeekend;
