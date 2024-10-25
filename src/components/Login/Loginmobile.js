import React from "react";
import backgroundImage from "../../img/login.jpg"; 
import logo from "../../img/logo.png"; 

const Login = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover overflow-hidden bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Bluish background layer */}
      <div className="absolute inset-0 bg-[#4B6681B2] z-0"></div>

      {/* Form Container */}
      <div className="relative w-full max-w-xs p-5 z-10 bg-transparent">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Travello10 Logo" className="h-40" /> {/* Increased logo height */}
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-xl font-bold mb-6">
          Login to your Account
        </h2>

        {/* Form Fields */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 placeholder-black rounded-md border border-gray-300 bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 placeholder-black rounded-md border border-gray-300 bg-white"
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-cyan-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
           Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 w-1/4"></div>
          <span className="mx-2 text-white text-sm">OR</span>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>

        {/* Login Link */}
        <p className="mt-4 text-center text-white text-sm">
          Don't have an account?{" "}
          <a href="/Signup" className="text-white ml-1 cursor-pointer hover:underline">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
