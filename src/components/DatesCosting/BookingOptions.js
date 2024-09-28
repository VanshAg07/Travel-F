import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import axios from "axios"; // Add Axios to handle API requests
import Dropnav from "../../components/Dropnav"

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const BookingOptions = () => {
  const location = useLocation();
  const {
    selectedDate,
    tripName,
    tripPrice,
    finalCostingDetails = {},
  } = location.state || {};
  const formattedDate = formatDate(selectedDate);
  const [selectedSharing, setSelectedSharing] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSharingSelect = (type) => {
    setSelectedSharing(type);
    setPeopleCount(1);
  };

  const calculatePrice = (pricePerPerson, count) => {
    return pricePerPerson * count;
  };

  const selectedPrice =
    selectedSharing === "double"
      ? tripPrice
      : selectedSharing === "triple"
      ? tripPrice
      : selectedSharing === "quad"
      ? tripPrice
      : 0;

  const basePrice = calculatePrice(selectedPrice, peopleCount);
  const gst = basePrice * 0.05;
  const totalPrice = basePrice + gst;

  // Function to initiate PhonePe payment
  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const orderId = `order_${Date.now()}`; // Generate a unique order ID
      const response = await axios.post("http://localhost:5000/api/payment/phonepe", {
        amount: totalPrice,
        orderId,
        customerPhone: "9876543210", // Customer phone number, can be dynamic
      });

      if (response.data.success) {
        // Redirect to PhonePe payment page
        window.location.href = response.data.paymentUrl;
      } else {
        alert("Payment initiation failed!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initiation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <Dropnav/>
      <div className="flex justify-center items-center bg-gray-100 w-full">
        <div className="min-h-screen p-6 flex justify-center items-center">
          <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Booking Details for {tripName}
            </h1>
            <p className="text-xl text-center text-gray-600 mb-8">
              Selected Date:{" "}
              <span className="text-blue-500 font-semibold">
                {formattedDate}
              </span>
            </p>

            {/* Sharing Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Double Sharing */}
              <div
                onClick={() => handleSharingSelect("double")}
                className={`p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-200 ${
                  selectedSharing === "double" ? "bg-blue-200" : "bg-blue-100"
                }`}
              >
                <h2 className="text-lg font-bold text-blue-600 mb-4">
                  Double Sharing
                </h2>
                <p className="text-lg text-gray-800">
                  Price per person: ₹{tripPrice}
                </p>
              </div>

              {/* Triple Sharing */}
              <div
                onClick={() => handleSharingSelect("triple")}
                className={`p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-200 ${
                  selectedSharing === "triple" ? "bg-green-200" : "bg-green-100"
                }`}
              >
                <h2 className="text-lg font-bold text-green-600 mb-4">
                  Triple Sharing
                </h2>
                <p className="text-lg text-gray-800">
                  Price per person: ₹{tripPrice}
                </p>
              </div>

              {/* Quad Sharing */}
              <div
                onClick={() => handleSharingSelect("quad")}
                className={`p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-200 ${
                  selectedSharing === "quad" ? "bg-yellow-200" : "bg-yellow-100"
                }`}
              >
                <h2 className="text-lg font-bold text-yellow-600 mb-4">
                  Quad Sharing
                </h2>
                <p className="text-lg text-gray-800">
                  Price per person: ₹{tripPrice}
                </p>
              </div>
            </div>

            {selectedSharing && (
              <div className="mt-6 flex justify-center items-center">
                <h3 className="text-lg font-semibold text-gray-700 mr-6">
                  Number of People:
                </h3>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      setPeopleCount((prev) => Math.max(prev - 1, 1))
                    }
                    className="bg-gray-300 px-3 py-1 rounded-l-lg text-lg font-semibold"
                  >
                    -
                  </button>
                  <div className="px-6 py-1 bg-white border-t border-b text-lg font-semibold">
                    {peopleCount}
                  </div>
                  <button
                    onClick={() => setPeopleCount((prev) => prev + 1)}
                    className="bg-gray-300 px-3 py-1 rounded-r-lg text-lg font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Price Breakdown */}
            {selectedSharing && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-600">
                  Price Breakdown
                </h2>
                <div className="mt-4">
                  <p className="text-lg text-gray-700">
                    Base Price: ₹{basePrice.toFixed(2)}
                  </p>
                  <p className="text-lg text-gray-700">
                    GST (5%): ₹{gst.toFixed(2)}
                  </p>
                  <p className="text-xl font-bold text-gray-800 mt-4">
                    Total: ₹{totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            )}

            {/* Payment Button */}
            {selectedSharing && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handlePayment}
                  className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all duration-200 hover:bg-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Proceed to Payment"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOptions;
