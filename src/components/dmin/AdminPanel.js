import React, { useState } from "react";

const states = [
  "Meghalaya",
  "Kashmir",
  "Spiti Valley",
  "Kerala",
  "Himachal Pradesh",
  "Rajasthan",
  "Uttarakhand",
  "Ladakh",
  "Goa",
  "Manali",
];

const AdminPanel = () => {
  const [tripData, setTripData] = useState({
    tripName: "",
    tripPrice: "",
    tripQuantity: "",
    tripDate: "",
    tripLocation: "",
    tripDuration: "",
    tripAccommodation: "",
    tripActivities: "",
    tripTransportation: "",
    tripFood: "",
    tripBeverages: "",
    tripSpecialRequests: "",
    tripCancellations: "",
    tripInclusions: [""],
    tripExclusions: [""],
    tripItinerary: [{ title: "", points: [""] }],
    tripAdditionalServices: "",
    tripCancellationPolicy: "",
    tripPaymentMethods: "",
    tripAmenities: "",
    tripRules: "",
    tripImages: [],
    pdf: null,
    tripDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData({ ...tripData, [name]: value });
  };

  const handleArrayChange = (e, index, fieldName) => {
    const updatedArray = [...tripData[fieldName]];
    updatedArray[index] = e.target.value;
    setTripData({ ...tripData, [fieldName]: updatedArray });
  };

  const addField = (fieldName) => {
    setTripData({ ...tripData, [fieldName]: [...tripData[fieldName], ""] });
  };

  const handleItineraryChange = (e, index, fieldName, itineraryIndex) => {
    const updatedItinerary = [...tripData.tripItinerary];
    if (fieldName === "title") {
      updatedItinerary[index].title = e.target.value;
    } else {
      updatedItinerary[index].points[itineraryIndex] = e.target.value;
    }
    setTripData({ ...tripData, tripItinerary: updatedItinerary });
  };

  const addItineraryField = () => {
    setTripData({
      ...tripData,
      tripItinerary: [...tripData.tripItinerary, { title: "", points: [""] }],
    });
  };

  const addItineraryPoint = (index) => {
    const updatedItinerary = [...tripData.tripItinerary];
    updatedItinerary[index].points.push("");
    setTripData({ ...tripData, tripItinerary: updatedItinerary });
  };

  // Handle image files
  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setTripData({ ...tripData, tripImages: images });
  };

  // Handle PDF file
  const handlePdfChange = (e) => {
    setTripData({ ...tripData, pdf: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to handle file uploads
    const formData = new FormData();
    Object.keys(tripData).forEach((key) => {
      if (key === "tripImages") {
        tripData.tripImages.forEach((image, index) => {
          formData.append(`tripImages[${index}]`, image);
        });
      } else if (key === "pdf") {
        formData.append(key, tripData.pdf);
      } else {
        formData.append(key, tripData[key]);
      }
    });

    // Make API request to submit formData (replace with actual API endpoint)
    fetch("https://travel-server-iley.onrender.com/api/trip/state/:stateId/trip", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip submitted successfully", data);
      })
      .catch((error) => {
        console.error("Error submitting trip", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-yellow-700">
      <h2 className="text-2xl font-bold mb-4">Add Trip Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Trip Location Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trip Location
            </label>
            <select
              name="tripLocation"
              value={tripData.tripLocation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            >
              <option value="">Select a Location</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Other form fields for trip details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trip Name
            </label>
            <input
              type="text"
              name="tripName"
              value={tripData.tripName}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
          </div>
          {/* Repeat for other fields */}
        </div>

        {/* Dynamic fields for inclusions */}
        <div>
          <h3 className="text-lg font-semibold">Trip Inclusions</h3>
          {tripData.tripInclusions.map((inclusion, index) => (
            <input
              key={index}
              type="text"
              value={inclusion}
              onChange={(e) => handleArrayChange(e, index, "tripInclusions")}
              className="block w-full border-gray-300 rounded-md mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField("tripInclusions")}
            className="text-blue-500"
          >
            + Add Inclusion
          </button>
        </div>

        {/* Dynamic fields for exclusions */}
        <div>
          <h3 className="text-lg font-semibold">Trip Exclusions</h3>
          {tripData.tripExclusions.map((exclusion, index) => (
            <input
              key={index}
              type="text"
              value={exclusion}
              onChange={(e) => handleArrayChange(e, index, "tripExclusions")}
              className="block w-full border-gray-300 rounded-md mb-2"
            />
          ))}
          <button
            type="button"
            onClick={() => addField("tripExclusions")}
            className="text-blue-500"
          >
            + Add Exclusion
          </button>
        </div>

        {/* Itinerary Fields */}
        <div>
          <h3 className="text-lg font-semibold">Trip Itinerary</h3>
          {tripData.tripItinerary.map((item, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleItineraryChange(e, index, "title")}
                placeholder="Itinerary Title"
                className="block w-full border-gray-300 rounded-md mb-2"
              />
              {item.points.map((point, itineraryIndex) => (
                <input
                  key={itineraryIndex}
                  type="text"
                  value={point}
                  onChange={(e) =>
                    handleItineraryChange(e, index, "points", itineraryIndex)
                  }
                  placeholder="Itinerary Point"
                  className="block w-full border-gray-300 rounded-md mb-2"
                />
              ))}
              <button
                type="button"
                onClick={() => addItineraryPoint(index)}
                className="text-blue-500"
              >
                + Add Itinerary Point
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItineraryField}
            className="text-blue-500"
          >
            + Add Itinerary
          </button>
        </div>

        {/* File upload for images */}
        <div>
          <h3 className="text-lg font-semibold">Trip Images</h3>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* File upload for PDF */}
        <div>
          <h3 className="text-lg font-semibold">Trip PDF</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit Trip
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
