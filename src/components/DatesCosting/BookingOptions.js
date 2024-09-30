import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import axios from "axios";
import Dropnav from "../../components/Dropnav";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const BookingOptions = () => {
  const location = useLocation();
  const {
    selectedDate,
    tripPrice,
    tripName,
    doubleSharing,
    tripleSharing,
    quadSharing,
  } = location.state || {};
  const formattedDate = formatDate(selectedDate);

  // State hooks
  const [selectedSharing, setSelectedSharing] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [customerPhone, setCustomerPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSharingSelect = (type) => {
    setSelectedSharing(type);
    setPeopleCount(1);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number);
  };

  const handlePhoneChange = (e) => {
    setCustomerPhone(e.target.value);
    if (!validatePhoneNumber(e.target.value)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    } else {
      setPhoneError("");
    }
  };

  // Calculate price based on sharing and people count
  const calculatePrice = (pricePerPerson, count) => pricePerPerson * count;

  const selectedPrice =
    selectedSharing === "double"
      ? doubleSharing
      : selectedSharing === "triple"
      ? tripleSharing
      : selectedSharing === "quad"
      ? quadSharing
      : 0;

  const basePrice = calculatePrice(selectedPrice, peopleCount);
  const gst = basePrice * 0.08;
  const totalPrice = basePrice + gst;
  console.log(totalPrice);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!validatePhoneNumber(customerPhone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsLoading(true);
    const res = await loadRazorpayScript();

    if (!res) {
      alert(
        "Failed to load Razorpay SDK. Please check your internet connection."
      );
      setIsLoading(false);
      return;
    }

    try {
      const orderId = `order_${Date.now()}`;
      const response = await axios.post(
        "http://localhost:5000/api/payment/razorpay",
        {
          amount: totalPrice,
          orderId,
          customerPhone,
        }
      );

      if (response.data.success) {
        const { amount, currency, orderId: razorpayOrderId } = response.data;

        // Calculate 3% additional tax on the amount
        const additionalTax = amount * 0.03;
        const totalAmountWithTax = amount + additionalTax; // Total amount including the 3% tax
        console.log(totalAmountWithTax);
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay Key ID
          amount: totalAmountWithTax.toString(), // Update amount to include tax
          currency: currency,
          name: "TRAVELLOTEN",
          description: `Booking for ${tripName}`,
          order_id: razorpayOrderId,
          handler: async (response) => {
            const data = {
              orderId: razorpayOrderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              customerPhone,
              tripName,
              tripPrice,
              selectedDate,
              selectedSharing,
            };

            // Verify payment on the server
            const result = await axios.post(
              "http://localhost:5000/api/payment/verify",
              data
            );

            if (result.data.success) {
              alert("Payment successful!");
              // Redirect or update UI after successful payment
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          },
          prefill: {
            name: "Your Customer Name",
            email: "customer@example.com",
            contact: customerPhone,
          },
          notes: {
            address: "Customer Address",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        alert("Payment initiation failed!");
      }
    } catch (error) {
      console.error(
        "Payment error:",
        error.response ? error.response.data : error
      );
      alert("Payment initiation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <Dropnav />
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
                  Price per person: ₹{doubleSharing}
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
                  Price per person: ₹{tripleSharing}
                </p>
              </div>
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
                  Price per person: ₹{quadSharing}
                </p>
              </div>
            </div>
            {/* People Count */}
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
            {/* Phone Number Input */}
            <div className="mt-6">
              <label className="block text-lg font-semibold text-gray-700">
                Enter Your Phone Number:
              </label>
              <input
                type="text"
                value={customerPhone}
                onChange={handlePhoneChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${
                  phoneError ? "border-red-500" : "focus:border-blue-500"
                }`}
                maxLength="10"
                placeholder="9876543210"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-2">{phoneError}</p>
              )}
            </div>
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

            {/* Proceed Button */}
            <button
              onClick={handlePayment}
              disabled={
                !validatePhoneNumber(customerPhone) ||
                !selectedSharing ||
                isLoading
              }
              className={`mt-8 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md ${
                isLoading || !selectedSharing || !customerPhone
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOptions;
