import React, { useState } from "react";
import { toast } from "react-hot-toast";
import bg from "../../images/signup.jpg";
import useMediaQuery from "../hooks/UseMediaQuery";
import Signupmobile from "./Signupmobile"; 

function Signup() {
  // Media query to detect screens up to 768px (large to small mobile screens)
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.travello10.com/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phoneNo,
        }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        toast.success("Signup Successful");
        window.location.href = "/login";
      } else {
        setError(data.error || "Signup failed");
        toast.error(data.error || "Signup failed");
      }
    } catch (error) {
      setError("An error occurred");
      toast.error("An error occurred");
    }
  };

  // Conditionally render `Signupmobile` for screens smaller than tablet size
  if (isMobile) {
    return <Signupmobile />;
  }

  return (
    <div className="bg-cover bg-center bg-[#e1feff] h-screen w-full flex justify-center items-center">
      <div className="w-[80%] max-w-[70%] h-[85%] bg-white shadow-xl shadow-black rounded-xl flex">
        <div
          className="w-[50%] h-full bg-cover bg-center rounded-l-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center bg-[#e1feff] p-10 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-cyan-500 mb-4">
            Create an Account
          </h1>
          <p className="text-black font-medium mb-8">Sign up to create a new account</p>
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">Phone No.</label>
              <input
                type="number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter phone number"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black font-medium mb-1 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium bg-cyan-500 text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3 font-medium text-black">-------------- OR --------------</p>
          <p className="mt-2 font-medium text-black">
            Already have an account?
            <span className="text-blue-600 cursor-pointer hover:underline ml-1">
              <a href="/login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
