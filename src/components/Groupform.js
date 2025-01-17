import axios from "axios";
import React, { useState } from "react";

const EuropeTripEnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    whatsappNumber: "",
    email: "",
    peopleCount: "",
    tripType: "",
    travelMonth: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const {
      fullName,
      whatsappNumber,
      email,
      peopleCount,
      tripType,
      travelMonth,
    } = formData;

    if (
      !fullName ||
      !whatsappNumber ||
      !email ||
      !peopleCount ||
      !tripType ||
      !travelMonth
    ) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(whatsappNumber)) {
      setError("Please enter a valid WhatsApp number.");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      setError("");
      setMessage("");
      setIsLoading(true);
      const response = await axios.post(
        "https://api.travello10.com/api/contact/contact-corporate",
        formData
      );

      if (response.status === 200) {
        setMessage("Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          countryCode: "+91",
          whatsappNumber: "",
          email: "",
          peopleCount: "",
          tripType: "",
          travelMonth: "",
        });
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.checked = false;
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        "Failed to submit the form. Please check your connection or try again later."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="flex bg-[#ffffe6] pt-10 pb-10 justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-cyan-600 mb-6 text-center">
          Travello10 Enquiry Form
        </h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {message && <div className="text-green-500 mb-4">{message}</div>}

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="e.g: Ron Bairstow"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="whatsappNumber"
          >
            WhatsApp Number
          </label>
          <div className="flex">
            <select
              id="countryCode"
              name="countryCode"
              className="border border-gray-300 bg-gray-100 text-gray-700 rounded-l-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
            </select>

            <input
              type="text"
              id="whatsappNumber"
              name="whatsappNumber"
              placeholder="Enter your WhatsApp number"
              className="w-full p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ron@example.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Number of people interested for the trip?
          </label>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peopleCount"
                value="20-40 Pax"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">20-40 Pax</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peopleCount"
                value="40-60 Pax"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">40-60 Pax</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peopleCount"
                value="60-80 Pax"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">60-80 Pax</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peopleCount"
                value="80-100 Pax"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">80-100 Pax</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="peopleCount"
                value="100+ Pax"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">100+ Pax</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Type of trip you want to take?
          </label>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="tripType"
                value="Group"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">
                Group Trips/Fixed Departures
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="tripType"
                value="Private"
                className="form-radio text-blue-600 focus:ring-blue-500"
                onChange={handleChange}
              />
              <span className="ml-2 text-gray-600">
                Customized/Private Trips
              </span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="travelMonth"
          >
            Any tentative/finalized month for your trip?
          </label>
          <select
            id="travelMonth"
            name="travelMonth"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.travelMonth}
            onChange={handleChange}
          >
            <option>Select Month of Travel</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full bg-cyan-500 text-white p-3 rounded-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default EuropeTripEnquiryForm;
