import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-toastify";
import { setUser } from "../../Slices/UserSlice";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendOTP = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://api.travello10.com/api/auth/sendOtp",
        { email }
      );

      if (response.status === 200) {
        setOtpSent(true);
        toast.success("OTP sent to your email.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://api.travello10.com/api/auth/verifyOtp",
        { email, otp }
      );

      if (response.status === 200) {

          window.location.href = "/admin";
        } else {
          setErrorMessage("You do not have admin access.");
        }
      
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">
          {otpSent ? "Verify OTP" : "Admin Login"}
        </h2>
        {errorMessage && (
          <div className="p-2 text-red-600 bg-red-100 rounded">
            {errorMessage}
          </div>
        )}
        {!otpSent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendOTP();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerifyOtp();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter the OTP"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
