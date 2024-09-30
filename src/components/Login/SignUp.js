import React, { useState } from "react";
import { toast } from "react-hot-toast";
import bg from "../../images/signup.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://travel-server-iley.onrender.com/register", {
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

  return (
    <div className="bg-cover bg-center bg-[#16423C] h-screen w-full flex justify-center items-center">
      <div className="w-[80%] max-w-[70%] h-[85%] bg-white shadow-lg rounded-xl flex">
        <div
          className="w-[50%] h-full bg-cover bg-center rounded-l-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center bg-[#E9EFEC] p-10 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-[#16423C] mb-4">
            Create an Account
          </h1>
          <p className="text-gray-500 mb-8">Sign up to create a new account</p>
          <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm">Phone No.</label>
              <input
                type="number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter phone number"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16423C"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#16423C] text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-gray-500">-------------- OR --------------</p>
          <p className="mt-2 text-gray-600">
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
