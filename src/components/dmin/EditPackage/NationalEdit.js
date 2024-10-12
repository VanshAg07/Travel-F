import React, { useState, useEffect } from "react";
import axios from "axios";

function NationalEdit() {
  const [packages, setPackages] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [tripDetails, setTripDetails] = useState({
    tripName: "",
    tripDuration: "",
    tripPrice: 0,
    tripDescription: "",
  });

  useEffect(() => {
    axios
      .get("https://api.travello10.com/api/edit-packages/get-national-packages")
      .then((response) => {
        if (response.data) {
          setPackages(response.data.states || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
      });
  }, []);

  const handleSelectTrip = (pkg, trip) => {
    setSelectedTrip({ ...pkg, ...trip });
    setTripDetails({
      tripName: trip.tripName || "",
      tripDuration: trip.tripDuration || "",
      tripPrice: trip.tripPrice || 0,
      tripDescription: trip.tripDescription || "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTrip) {
      axios
        .put(
          `https://api.travello10.com/api/edit-national-package/${selectedTrip.stateName}/${selectedTrip._id}`,
          tripDetails
        )
        .then((response) => {
          alert("Trip details updated successfully!");
          console.log("Updated Trip Details:", response.data);
        })
        .catch((error) => {
          console.error("Error updating trip:", error);
        });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Edit National Packages
      </h2>

      <ul className="space-y-6">
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <li
              key={pkg._id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <strong className="text-xl font-semibold">{pkg.stateName}</strong>
              <ul className="mt-4 space-y-2">
                {pkg.trips.map((trip) => (
                  <li
                    key={trip._id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                  >
                    <div>
                      <span className="font-medium">
                        {trip.tripName || "Unnamed Trip"}
                      </span>{" "}
                      - {trip.tripDuration || "No Duration"}
                    </div>
                    <button
                      onClick={() => handleSelectTrip(pkg, trip)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No national packages available.
          </p>
        )}
      </ul>

      {selectedTrip && (
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Editing Trip in {selectedTrip.stateName} - {tripDetails.tripName}
          </h3>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Trip Name:
            </label>
            <input
              type="text"
              name="tripName"
              value={tripDetails.tripName}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Duration:</label>
            <input
              type="text"
              name="tripDuration"
              value={tripDetails.tripDuration}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Price:</label>
            <input
              type="number"
              name="tripPrice"
              value={tripDetails.tripPrice}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="tripDescription"
              value={tripDetails.tripDescription}
              onChange={handleInputChange}
              rows="4"
              required
              className="mt-1 p-2 w-full border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

export default NationalEdit;
