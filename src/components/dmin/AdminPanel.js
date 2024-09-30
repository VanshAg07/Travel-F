import React, { useState } from "react";

const states = [
  { _id: "66f05385d87823fc7b98f371", stateName: "Kashmir" },
  { _id: "66f2f0ecad7a7846f232e147", stateName: "Sikkim" },
  { _id: "66f0538fd87823fc7b98f375", stateName: "Meghalaya" },
  { _id: "66f05395d87823fc7b98f377", stateName: "Rajasthan" },
  { _id: "66f053a6d87823fc7b98f379", stateName: "Spiti Valley" },
  { _id: "66f053afd87823fc7b98f37b", stateName: "Kerala" },
  { _id: "66f053b6d87823fc7b98f37d", stateName: "Himachal Pradesh" },
  { _id: "66f053bdd87823fc7b98f37f", stateName: "Uttarakhand" },
  { _id: "66f053c3d87823fc7b98f381", stateName: "Ladakh" },
  { _id: "66f2f117ad7a7846f232ea78", stateName: "Andaman" },
];

const AdminPanel = () => {
  const [selectedState, setSelectedState] = useState("");
  const [tripData, setTripData] = useState({
    tripName: "",
    tripPrice: "",
    tripDate: [""],
    tripLocation: "",
    tripDuration: "",
    tripInclusions: [""],
    tripExclusions: [""],
    tripItinerary: [{ title: "", points: [""] }],
    tripImages: [],
    pdf: null,
    tripDescription: [""],
    pickAndDrop: "",
    sharing: [{ title: "", price: "" }],
    tripBackgroundImg: "",
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
  const handleSharingChange = (e, index, fieldName) => {
    const updatedSharing = [...tripData.sharing];
    const sharingObject = updatedSharing[index];
    sharingObject[fieldName] = e.target.value;
    updatedSharing[index] = sharingObject;
    setTripData({ ...tripData, sharing: updatedSharing });
  };
  const addItineraryField = () => {
    setTripData({
      ...tripData,
      tripItinerary: [...tripData.tripItinerary, { title: "", points: [""] }],
    });
  };
  const addSharingField = () => {
    setTripData({
      ...tripData,
      sharing: [...tripData.sharing, { title: "", price: "" }],
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
  const handlePackageChange = (e) => {
    const image = e.target.files[0];
    setTripData({ ...tripData, tripBackgroundImg: image });
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
    console.log(selectedState);
    const formData = new FormData();
    Object.keys(tripData).forEach((key) => {
      if (key === "tripImages") {
        tripData.tripImages.forEach((image) => {
          formData.append("tripImages", image);
        });
      } else if (key === "pdf" && tripData.pdf) {
        formData.append("pdf", tripData.pdf);
      } else if (key === "tripBackgroundImg" && tripData.tripBackgroundImg) {
        formData.append("tripBackgroundImg", tripData.tripBackgroundImg);
      } else if (Array.isArray(tripData[key])) {
        if (key === "tripItinerary") {
          tripData.tripItinerary.forEach((item, index) => {
            formData.append(`${key}[${index}][title]`, item.title);
            item.points.forEach((point, pointIndex) => {
              formData.append(`${key}[${index}][points][${pointIndex}]`, point);
            });
          });
        } else if (key === "sharing") {
          tripData.sharing.forEach((item, index) => {
            formData.append(`${key}[${index}][title]`, item.title);
            formData.append(`${key}[${index}][price]`, item.price);
          });
        } else {
          tripData[key].forEach((item, index) => {
            formData.append(`${key}[${index}]`, item);
          });
        }
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
    <div className="max-w-full p-6 bg-white shadow-lg justify-center flex flex-col mb-10 ">
      <h2 className="text-xl font-bold">Add Trip Details</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-l font-medium">Trip Location</label>
            <select
              name="tripLocation"
              value={tripData.tripLocation}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
            <label className="block text-l font-medium">Select State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
            <label className="block text-l font-medium">Trip Name</label>
            <input
              type="text"
              name="tripName"
              value={tripData.tripName}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
            />
          </div>
          <div>
            <label className="block text-l font-medium">Trip Price</label>
            <input
              type="number"
              name="tripPrice"
              value={tripData.tripPrice}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
            />
          </div>
          <div>
            <label className="block text-l font-medium">Trip Dates</label>
            {tripData.tripDate.map((date, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => handleArrayChange(e, index, "tripDate")}
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
                />
                <button
                  type="button"
                  onClick={() => addField("tripDate")}
                  className="ml-2 p-1 text-white bg-green-600 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-l font-medium">
              Trip Duration (in days eg. 3D - 2N)
            </label>
            <input
              type="text"
              name="tripDuration"
              value={tripData.tripDuration}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
            />
          </div>
          <div>
            <label className="block text-l font-medium">Trip Inclusions</label>
            {tripData.tripInclusions.map((inclusion, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="text"
                  value={inclusion}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripInclusions")
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
          <div>
            <label className="block text-l font-medium">Trip Exclusions</label>
            {tripData.tripExclusions.map((exclusion, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="text"
                  value={exclusion}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripExclusions")
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
          <div>
            <label className="block text-l font-medium">Trip Itinerary</label>
            {tripData.tripItinerary.map((item, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleItineraryChange(e, index, "title")}
                  placeholder="Itinerary Title"
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
                    className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
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
            <label className="block text-l font-medium">Trip Description</label>
            {tripData.tripDescription.map((inclusion, index) => (
              <div key={index} className="flex items-center">
                <textarea
                  name="tripDescription"
                  value={tripData.tripDescription}
                  onChange={(e) =>
                    handleArrayChange(e, index, "tripDescription")
                  }
                  className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
                />
                <button
                  type="button"
                  onClick={() => addField("tripDescription")}
                  className="ml-2 p-1 text-white bg-green-600 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-l font-medium">Sharing Options</label>
            {tripData.sharing.map((share, index) => (
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
          <div>
            <label className="block text-l font-medium">
              Pick and Drop (eg. Guwahati - Guwahati)
            </label>
            <input
              type="text"
              name="pickAndDrop"
              className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
              value={tripData.pickAndDrop}
              onChange={handleInputChange}
            />
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
