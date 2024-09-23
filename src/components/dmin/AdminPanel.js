import React, { useState } from "react";

const states = [
  { _id: "66f05385d87823fc7b98f371", stateName: "Kashmir" },
  { _id: "66f05389d87823fc7b98f373", stateName: "Goa" },
  { _id: "66f0538fd87823fc7b98f375", stateName: "Meghalaya" },
  { _id: "66f05395d87823fc7b98f377", stateName: "Rajasthan" },
  { _id: "66f053a6d87823fc7b98f379", stateName: "Spiti Valley" },
  { _id: "66f053afd87823fc7b98f37b", stateName: "Kerala" },
  { _id: "66f053b6d87823fc7b98f37d", stateName: "Himachal Pradesh" },
  { _id: "66f053bdd87823fc7b98f37f", stateName: "Uttarakhand" },
  { _id: "66f053c3d87823fc7b98f381", stateName: "Ladakh" },
  { _id: "66f053cad87823fc7b98f383", stateName: "Manali" },
];

const AdminPanel = () => {
  const [selectedState, setSelectedState] = useState("");
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

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setTripData({ ...tripData, tripImages: images });
  };

  const handlePdfChange = (e) => {
    setTripData({ ...tripData, pdf: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedState) {
      alert("Please select a state before submitting the form.");
      return;
    }

    const formData = new FormData();
    Object.keys(tripData).forEach((key) => {
      if (key === "tripImages") {
        tripData.tripImages.forEach((image) => {
          formData.append("tripImages", image);
        });
      } else if (key === "pdf" && tripData.pdf) {
        formData.append("pdf", tripData.pdf);
      } else if (Array.isArray(tripData[key])) {
        tripData[key].forEach((item, index) => {
          if (key === "tripItinerary") {
            formData.append(`${key}[${index}][title]`, item.title);
            item.points.forEach((point, pointIndex) => {
              formData.append(`${key}[${index}][points][${pointIndex}]`, point);
            });
          } else {
            formData.append(`${key}[${index}]`, item);
          }
        });
      } else {
        formData.append(key, tripData[key]);
      }
    });

    // Log FormData for debugging
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    fetch(`https://travel-server-iley.onrender.com/api/trip/state/${selectedState}/trip`, {
      method: "POST",
      body: formData,
    })
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

  return (
    <div className="max-w-full mx-auto p-8 bg-white shadow-lg ">
      <h2 className="text-2xl font-bold mb-4">Add Trip Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium">Trip Location</label>
            <select
              name="tripLocation"
              value={tripData.tripLocation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            >
              <option value="">Select a Location</option>
              {states.map((state) => (
                <option key={state._id} value={state.stateName}>
                  {state.stateName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium">Select State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            >
              <option value="">Select a State</option>
              {states.map((state) => (
                <option key={state._id} value={state._id}>
                  {state.stateName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Name</label>
            <input
              type="text"
              name="tripName"
              value={tripData.tripName}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Price</label>
            <input
              type="number"
              name="tripPrice"
              value={tripData.tripPrice}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Quantity</label>
            <input
              type="number"
              name="tripQuantity"
              value={tripData.tripQuantity}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Date</label>
            <input
              type="date"
              name="tripDate"
              value={tripData.tripDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Trip Duration (in days)
            </label>
            <input
              type="number"
              name="tripDuration"
              value={tripData.tripDuration}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Accommodation</label>
            <input
              type="text"
              name="tripAccommodation"
              value={tripData.tripAccommodation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Activities</label>
            <input
              type="text"
              name="tripActivities"
              value={tripData.tripActivities}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Transportation</label>
            <input
              type="text"
              name="tripTransportation"
              value={tripData.tripTransportation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Food</label>
            <input
              type="text"
              name="tripFood"
              value={tripData.tripFood}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Beverages</label>
            <input
              type="text"
              name="tripBeverages"
              value={tripData.tripBeverages}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Special Requests
            </label>
            <input
              type="text"
              name="tripSpecialRequests"
              value={tripData.tripSpecialRequests}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Cancellations</label>
            <input
              type="text"
              name="tripCancellations"
              value={tripData.tripCancellations}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>

          {/* Trip Inclusions */}
          <div>
            <label className="block text-lg font-medium">Trip Inclusions</label>
            {tripData.tripInclusions.map((inclusion, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="text"
                  value={inclusion}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripInclusions")
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
                />
                <button
                  type="button"
                  onClick={() => addField("tripInclusions")}
                  className="ml-2 p-1 text-white bg-green-600 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>

          {/* Trip Exclusions */}
          <div>
            <label className="block text-lg font-medium">Trip Exclusions</label>
            {tripData.tripExclusions.map((exclusion, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="text"
                  value={exclusion}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripExclusions")
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
                />
                <button
                  type="button"
                  onClick={() => addField("tripExclusions")}
                  className="ml-2 p-1 text-white bg-green-600 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>

          {/* Trip Itinerary */}
          <div>
            <label className="block text-lg font-medium">Trip Itinerary</label>
            {tripData.tripItinerary.map((item, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleItineraryChange(e, index, "title")}
                  placeholder="Itinerary Title"
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
                />
                {item.points.map((point, pointIndex) => (
                  <input
                    key={pointIndex}
                    type="text"
                    value={point}
                    onChange={(e) =>
                      handleItineraryChange(e, index, "point", pointIndex)
                    }
                    placeholder="Point"
                    className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addItineraryPoint(index)}
                  className="ml-2 p-1 text-white bg-green-600 rounded"
                >
                  Add Point
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addItineraryField}
              className="mt-2 p-1 text-white bg-green-600 rounded"
            >
              Add Itinerary
            </button>
          </div>

          <div>
            <label className="block text-lg font-medium">
              Trip Cancellation Policy
            </label>
            <input
              type="text"
              name="tripCancellationPolicy"
              value={tripData.tripCancellationPolicy}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Trip Payment Methods
            </label>
            <input
              type="text"
              name="tripPaymentMethods"
              value={tripData.tripPaymentMethods}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Amenities</label>
            <input
              type="text"
              name="tripAmenities"
              value={tripData.tripAmenities}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Rules</label>
            <input
              type="text"
              name="tripRules"
              value={tripData.tripRules}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">
              Trip Description
            </label>
            <textarea
              name="tripDescription"
              value={tripData.tripDescription}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Trip Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Upload PDF</label>
            <input
              type="file"
              onChange={handlePdfChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-2 mb-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
