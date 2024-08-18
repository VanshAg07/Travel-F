import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tripDetails, setTripDetails] = useState({
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
    tripInclusions: "",
    tripExclusions: "",
    tripAdditionalServices: "",
    tripCancellationPolicy: "",
    tripPaymentMethods: "",
    tripAmenities: "",
    tripRules: "",
    tripImages: "",
    tripDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://travel-server-iley.onrender.com/api/admin/addTrip", tripDetails);
      alert("Trip added successfully!");
      setTripDetails({
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
        tripInclusions: "",
        tripExclusions: "",
        tripAdditionalServices: "",
        tripCancellationPolicy: "",
        tripPaymentMethods: "",
        tripAmenities: "",
        tripRules: "",
        tripDescription: "",
      });
    } catch (error) {
      console.error("Error adding trip:", error);
      alert("Failed to add trip. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Trip</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="tripName"
          value={tripDetails.tripName}
          onChange={handleChange}
          placeholder="Trip Name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="tripPrice"
          value={tripDetails.tripPrice}
          onChange={handleChange}
          placeholder="Trip Price"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="tripQuantity"
          value={tripDetails.tripQuantity}
          onChange={handleChange}
          placeholder="Trip Quantity"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="date"
          name="tripDate"
          value={tripDetails.tripDate}
          onChange={handleChange}
          placeholder="Trip Date"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripLocation"
          value={tripDetails.tripLocation}
          onChange={handleChange}
          placeholder="Trip Location"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="number"
          name="tripDuration"
          value={tripDetails.tripDuration}
          onChange={handleChange}
          placeholder="Trip Duration (days)"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripAccommodation"
          value={tripDetails.tripAccommodation}
          onChange={handleChange}
          placeholder="Trip Accommodation"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripActivities"
          value={tripDetails.tripActivities}
          onChange={handleChange}
          placeholder="Trip Activities"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripTransportation"
          value={tripDetails.tripTransportation}
          onChange={handleChange}
          placeholder="Trip Transportation"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripFood"
          value={tripDetails.tripFood}
          onChange={handleChange}
          placeholder="Trip Food"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripBeverages"
          value={tripDetails.tripBeverages}
          onChange={handleChange}
          placeholder="Trip Beverages"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripSpecialRequests"
          value={tripDetails.tripSpecialRequests}
          onChange={handleChange}
          placeholder="Trip Special Requests"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripCancellations"
          value={tripDetails.tripCancellations}
          onChange={handleChange}
          placeholder="Trip Cancellations"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripInclusions"
          value={tripDetails.tripInclusions}
          onChange={handleChange}
          placeholder="Trip Inclusions"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripExclusions"
          value={tripDetails.tripExclusions}
          onChange={handleChange}
          placeholder="Trip Exclusions"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripAdditionalServices"
          value={tripDetails.tripAdditionalServices}
          onChange={handleChange}
          placeholder="Trip Additional Services"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripCancellationPolicy"
          value={tripDetails.tripCancellationPolicy}
          onChange={handleChange}
          placeholder="Trip Cancellation Policy"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripPaymentMethods"
          value={tripDetails.tripPaymentMethods}
          onChange={handleChange}
          placeholder="Trip Payment Methods"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripAmenities"
          value={tripDetails.tripAmenities}
          onChange={handleChange}
          placeholder="Trip Amenities"
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
        <input
          type="text"
          name="tripRules"
          value={tripDetails.tripRules}
          onChange={handleChange}
          placeholder="Trip Rules"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="tripImages"
          value={tripDetails.tripImages}
          onChange={handleChange}
          placeholder="Trip Images (comma-separated URLs)"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <textarea
          name="tripDescription"
          value={tripDetails.tripDescription}
          onChange={handleChange}
          placeholder="Trip Description"
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
