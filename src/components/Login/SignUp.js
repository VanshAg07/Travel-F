import React, { useState } from "react";
import { toast } from "react-hot-toast";
import bg from "../../images/signup.jpg";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
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
    <div
      className="bg-cover bg-center h-screen w-full flex justify-center items-center"
    >
      <div className="w-[80%] max-w-[50%] h-[75%] bg-white shadow-lg rounded-2xl flex">
        <div
          className="w-[50%] h-full bg-cover bg-center rounded-l-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center bg-white p-10 rounded-r-2xl">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            Create an Account
          </h1>
          <p className="text-gray-500 mb-8">
            Sign up to create a new account
          </p>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-gray-500">-------------- OR --------------</p>
          <p className="mt-4 text-gray-600">
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
