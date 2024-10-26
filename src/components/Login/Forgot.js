import React, { useState } from "react";
import bg from "../../images/LoginImg.png";
import { jwtDecode } from "jwt-decode";
import useMediaQuery from "../hooks/UseMediaQuery";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { setUser } from "../../Slices/UserSlice";
import { useDispatch } from "react-redux";
import Forgotmob from "./Forgotmob"

function Forgot() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // New state for OTP
  const [newPassword, setNewPassword] = useState(""); // New state for new password
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSendOtp = async () => {
    // Add your OTP sending logic here
    toast.success("OTP sent to your email");
  };

  const handleVerifyOtp = async () => {
    // Add your OTP verification logic here
    toast.success("OTP verified");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle new password submission
    try {
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        toast.success("Password reset successful");
        // Redirect or perform other actions
      } else {
        setError(data.error || "Password reset failed");
        toast.error(data.error || "Password reset failed");
      }
    } catch (error) {
      setError("An error occurred");
      toast.error("An error occurred");
    }
  };

  // Conditionally render `Signupmobile` for screens smaller than tablet size
  if (isMobile) {
    return <Forgotmob />;
  }

  return (
    <div className="bg-cover bg-center bg-[#e1feff] h-screen w-full flex justify-center items-center">
      <div className="w-[80%] max-w-[70%] h-[75%] bg-[#C4DAD2] shadow-xl shadow-black rounded-2xl flex">
        <div
          className="w-[50%] h-full bg-cover bg-center rounded-l-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center bg-[#e1feff] p-10 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-cyan-500 mb-4">
            Forgot Your Password
          </h1>

          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
              />
            </div>

            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full py-2 font-medium bg-cyan-500 text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Send OTP
            </button>

            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter the OTP"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
              />
            </div>

            <button
              type="button"
              onClick={handleVerifyOtp}
              className="w-full py-2 font-medium bg-cyan-500 text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Verify OTP
            </button>

            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-2 font-medium bg-cyan-500 text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Submit
            </button>
          </form>

          <p className="mt-3 font-medium text-black text-sm">
            -------------- OR --------------
          </p>

          <p className="mt-2 font-medium text-black text-sm">
            Don't have an account?
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              <Link to="/Signup">Register Now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
