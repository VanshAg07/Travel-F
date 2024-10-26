import React, { useState } from "react";
import axios from "axios";
import { setUser } from "../../Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-token",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      // Handle successful login
      if (response.status === 200) {
        toast.success("Login Success");
        window.localStorage.setItem("token", data.data.token);
        const decodedToken = jwtDecode(data.data.token);
        dispatch(setUser(data.data));
        const role = decodedToken.role;
        // Check if the role is 'admin'
        if (role === "admin") {
          // Redirect to the admin dashboard
          window.location.href = "/admin";
        } else {
          // Handle case where the user is not an admin
          setErrorMessage("You do not have admin access.");
        }
      }
    } catch (error) {
      // Handle login error
      setErrorMessage(
        error.response?.data?.message || "An error occurred during login."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        {errorMessage && (
          <div className="p-2 text-red-600 bg-red-100 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
