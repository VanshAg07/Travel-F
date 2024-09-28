import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const states = [
    "Meghalaya",
    "Kashmir",
    "Spiti Valley",
    "Kerala",
    "Himachal Pradesh",
    "Rajasthan",
    "Uttrakhand",
    "Ladakh",
    "Goa",
    "Manali",
  ];

  const [tripDetails, setTripDetails] = useState({
    stateName: "",
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
  const [tripImage, setTripImage] = useState(null); // New state for image
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setTripImage(e.target.files[0]);
  };

  const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "Travell"); // Use your own Cloudinary upload preset
    formData.append("cloud_name", "dfsl9zcrt"); // Replace with your Cloudinary cloud name

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfsl9zcrt/image/upload",
        formData
      );
      return response.data.secure_url; // Return the image URL from Cloudinary
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      toast.error("Failed to upload image. Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = null;

    if (tripImage) {
      imageUrl = await uploadImageToCloudinary(tripImage);
      if (!imageUrl) {
        setLoading(false);
        return; // Stop if image upload fails
      }
    }

    const tripData = {
      ...tripDetails,
      stateName:tripDetails.stateName,
      tripImage: imageUrl,
    };

    try {
      await axios.post("http://localhost:5000/api/admin/addTrip", tripData);
      toast.success("Trip added successfully!");

      // Reset form
      setTripDetails({
        stateName: "",
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
      setTripImage(null);
    } catch (error) {
      console.error("Error adding trip:", error);
      toast.error("Failed to add trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Trip</h2>
      <form onSubmit={handleSubmit} className="text-center space-y-4">
        <select
          name="stateName"
          value={tripDetails.stateName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="tripName"
          value={tripDetails.tripName}
          onChange={handleChange}
          placeholder="Trip Name"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="number"
          name="tripPrice"
          value={tripDetails.tripPrice}
          onChange={handleChange}
          placeholder="Trip Price"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="number"
          name="tripQuantity"
          value={tripDetails.tripQuantity}
          onChange={handleChange}
          placeholder="Trip Quantity"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="date"
          name="tripDate"
          value={tripDetails.tripDate}
          onChange={handleChange}
          placeholder="Trip Date"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripLocation"
          value={tripDetails.tripLocation}
          onChange={handleChange}
          placeholder="Trip Location"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="number"
          name="tripDuration"
          value={tripDetails.tripDuration}
          onChange={handleChange}
          placeholder="Trip Duration (days)"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripAccommodation"
          value={tripDetails.tripAccommodation}
          onChange={handleChange}
          placeholder="Trip Accommodation"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripActivities"
          value={tripDetails.tripActivities}
          onChange={handleChange}
          placeholder="Trip Activities"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripTransportation"
          value={tripDetails.tripTransportation}
          onChange={handleChange}
          placeholder="Trip Transportation"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripFood"
          value={tripDetails.tripFood}
          onChange={handleChange}
          placeholder="Trip Food"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripBeverages"
          value={tripDetails.tripBeverages}
          onChange={handleChange}
          placeholder="Trip Beverages"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripSpecialRequests"
          value={tripDetails.tripSpecialRequests}
          onChange={handleChange}
          placeholder="Trip Special Requests"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripCancellations"
          value={tripDetails.tripCancellations}
          onChange={handleChange}
          placeholder="Trip Cancellations"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripInclusions"
          value={tripDetails.tripInclusions}
          onChange={handleChange}
          placeholder="Trip Inclusions"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripExclusions"
          value={tripDetails.tripExclusions}
          onChange={handleChange}
          placeholder="Trip Exclusions"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripAdditionalServices"
          value={tripDetails.tripAdditionalServices}
          onChange={handleChange}
          placeholder="Trip Additional Services"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripCancellationPolicy"
          value={tripDetails.tripCancellationPolicy}
          onChange={handleChange}
          placeholder="Trip Cancellation Policy"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripPaymentMethods"
          value={tripDetails.tripPaymentMethods}
          onChange={handleChange}
          placeholder="Trip Payment Methods"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
        />
        <input
          type="text"
          name="tripAmenities"
          value={tripDetails.tripAmenities}
          onChange={handleChange}
          placeholder="Trip Amenities"
          className="w-full p-2 border border-gray-300 rounded-lg"
          // required
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
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <textarea
          name="tripDescription"
          value={tripDetails.tripDescription}
          onChange={handleChange}
          placeholder="Trip Description"
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          disabled={loading}
        >
          {loading ? "Adding Trip..." : "Add Trip"}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
