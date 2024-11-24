import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";

const AddHoneymoon = () => {
  const [states, setStates] = useState([]); // State for storing the list of states
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [tripDetails, setTripDetails] = useState({
    tripName: "",
    tripPrice: "",
    tripLocation: "",
    tripDuration: "",
    tripInclusions: [""],
    tripExclusions: [""],
    tripItinerary: [{ title: "", points: [""] }],
    tripImages: [""],
    pdf: [],
    tripDescription: "",
    tripBackgroundImg: "",
    pickAndDrop: "",
    status: "active",
    overView: "",
  });

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = () => {
    setLoading(true);
    axios
      .get("https://api.travelo10.com/api/honeymoon/states")
      .then((response) => {
        const statesList = response.data.map((state) => ({
          name: state.stateName,
          id: state._id,
        }));
        // console.log("States:", statesList);
        setStates(statesList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

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
    // console.log(selectedState);
    e.preventDefault();

    const formData = new FormData();
    Object.keys(tripDetails).forEach((key) => {
      if (key === "tripImages") {
        tripDetails.tripImages.forEach((image) => {
          formData.append("tripImages", image);
        });
      } else if (key === "pdf") {
        tripDetails.pdf.forEach((pdf, index) => {
          formData.append("pdf", pdf.file);
          formData.append(`pdfStatus[${index}]`, pdf.status); // Append the corresponding status
        });
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
      `https://api.travelo10.com/api/honeymoon/add-honeymoon-package/${selectedState.id}`,
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
        alert("Trip submitted successfully!");
        setTripDetails({
          tripName: "",
          tripPrice: "",
          tripOfferPrice: "",
          tripDate: [""],
          tripLocation: "",
          tripDuration: "",
          tripInclusions: [""],
          tripExclusions: [""],
          tripItinerary: [{ title: "", points: [""] }],
          tripImages: [],
          pdf: [],
          tripDescription: [""],
          pickAndDrop: "",
          sharing: [{ title: "", price: "" }],
          tripBackgroundImg: "",
          overView: "",
          tripBookingAmount: "",
          tripSeats: "",
          customised: false,
        });
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
    const pdfFiles = Array.from(e.target.files);
    const newPdfs = pdfFiles.map((file) => ({
      file: file,
      status: "active",
    }));
    setTripDetails({ ...tripDetails, pdf: [...tripDetails.pdf, ...newPdfs] });
  };
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Add Honeymoon Package</h2>
      <form onSubmit={handleSubmit}>
        {/* State Name */}
        <div className="mb-4">
          <label className="block text-gray-700">State Name</label>
          <select
            value={selectedState ? selectedState.name : ""}
            onChange={(e) => {
              const selectedStateObject = states.find(
                (state) => state.name === e.target.value
              );
              setSelectedState(selectedStateObject || "");
            }}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          >
            <option value="">Select a State</option>
            {states.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
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
            onChange={(e) => {
              const value = e.target.value;
              // Allow only letters, numbers, "/", and "-" (no ".")
              if (/^[A-Za-z0-9\/\ ]*$/.test(value)) {
                setTripDetails({ ...tripDetails, tripName: value });
              }
            }}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Pick and Drop (e.g., Guwahati - Guwahati)
          </label>
          <input
            type="text"
            name="pickAndDrop"
            value={tripDetails.pickAndDrop}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only letters, spaces, and hyphens
              if (/^[A-Za-z\s\-]*$/.test(value)) {
                setTripDetails({ ...tripDetails, pickAndDrop: value });
              }
            }}
            required
            pattern="^[A-Za-z\s\-]+$"
            title="Only letters, spaces, and hyphens (-) are allowed."
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
            onChange={(e) => {
              const value = e.target.value;
              // Allow only letters, spaces, and hyphens
              if (/^[A-Za-z\s\-]*$/.test(value)) {
                setTripDetails({ ...tripDetails, overView: value });
              }
            }}
            pattern="^[A-Za-z\s\-]+$"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-l">
            Trip Duration (in days e.g., 3D - 2N)
          </label>
          <input
            type="text"
            name="tripDuration"
            value={tripDetails.tripDuration}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers, letters, spaces, and hyphens
              if (/^[0-9A-Za-z\s\/\-]*$/.test(value)) {
                setTripDetails({ ...tripDetails, tripDuration: value });
              }
            }}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
            required
            pattern="^[0-9A-Za-z\s\-]+$"
          />
        </div>
        <div className="mb-4">
          <label className="block text-l">Trip Description</label>
          <input
            type="text"
            name="tripDescription"
            value={tripDetails.tripDescription}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only letters, numbers, ".", "/", and "-"
              if (/^[A-Za-z0-9.\-/]*$/.test(value)) {
                setTripDetails({
                  ...tripDetails,
                  tripDescription: value,
                });
              }
            }}
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
            required
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
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only letters, numbers, ".", "/", and "-"
                  if (/^[A-Za-z0-9.\-/]*$/.test(value)) {
                    handleArrayChange(e, index, "tripInclusions");
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded"
                required
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
        <div className="mb-4">
          <label className="block text-gray-700">Trip Exclusions:</label>
          {tripDetails.tripExclusions.map((exclusion, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={exclusion}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only letters, numbers, ".", "/", and "-"
                  if (/^[A-Za-z0-9.\-/]*$/.test(value)) {
                    handleArrayChange(e, index, "tripExclusions");
                  }
                }}
                className="w-full p-2 border border-gray-300 rounded"
                required
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
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only letters, numbers, ".", "/", and "-"
                    if (/^[A-Za-z0-9.\-/]*$/.test(value)) {
                      handleArrayChange(e, index, "tripItinerary", "title");
                    }
                  }}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
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
                        const value = e.target.value;
                        // Allow only letters, numbers, ".", "/", and "-"
                        if (/^[A-Za-z0-9.\-/]*$/.test(value)) {
                          const updatedItinerary = [
                            ...tripDetails.tripItinerary,
                          ];
                          updatedItinerary[index].points[pointIndex] = value;
                          setTripDetails({
                            ...tripDetails,
                            tripItinerary: updatedItinerary,
                          });
                        }
                      }}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
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
            required
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
            required
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
        </div>
        <div>
          <label className="block text-l font-medium">
            Upload PDF (i.e. Itinerary)
            <br/>

            <span className="text-red-500">Note: PDF size 60mb</span>
          </label>
          <input
            type="file"
            multiple
            onChange={handlePdfChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md border-2 p-1 mb-2"
          />
          {tripDetails.pdf.map((pdf, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2">{pdf.file.name}</span>
              <select
                value={pdf.status}
                onChange={(e) => {
                  const updatedPdfs = [...tripDetails.pdf];
                  updatedPdfs[index].status = e.target.value;
                  setTripDetails({ ...tripDetails, pdf: updatedPdfs });
                }}
                className="border-gray-300 rounded-md border-2 p-1"
              >
                <option value="active">Active</option>
                <option value="non-active">Non-active</option>
              </select>
            </div>
          ))}
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
