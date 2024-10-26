import React, { useState } from "react";
import bg from "../../images/LoginImg.png";
import { jwtDecode } from "jwt-decode";
import useMediaQuery from "../hooks/UseMediaQuery";
import Loginmobile from "./Loginmobile"; 
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { setUser } from "../../Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
function Login() {

  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch=useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.travello10.com/login-user", {
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

      if (data.status === "ok") {
        toast.success("Login Success");
        window.localStorage.setItem("token", data.data.token);
        window.localStorage.setItem("username", data.data.username);
        window.localStorage.setItem("loggedIn", true);
        const decodedToken = jwtDecode(data.data.token);
        dispatch(setUser(data.data));
        // console.log(data.data)
        const role = decodedToken.role;
        if (role === "admin") {
          window.location.href = "/"; // Redirect to admin page
        } else {
          window.location.href = "/"; // Redirect to home page
        }
      } else {
        setError(data.error || "Login failed");
        toast.error(data.error || "Login failed");
      }
    } catch (error) {
      setError("An error occurred");
      toast.error("An error occurred");
    }
  };  

   // Conditionally render `Signupmobile` for screens smaller than tablet size
   if (isMobile) {
    return <Loginmobile />;
  }

  return (
    <div
      className="bg-cover bg-center bg-[#e1feff] h-screen w-full flex justify-center items-center"
      // style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="w-[80%] max-w-[70%] h-[75%] bg-[#C4DAD2] shadow-xl shadow-black rounded-2xl flex">
        <div
          className="w-[50%] h-full bg-cover bg-center rounded-l-2xl"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="w-[50%] h-full flex flex-col justify-center items-center bg-[#e1feff] p-10 rounded-r-2xl">
          <h1 className="text-2xl font-bold text-cyan-500 mb-4">
            Welcome Back!
          </h1>
          <p className="text-black font-medium mb-4 text-sm">
            Login to your account using email
          </p>

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
              className="w-full py-2 font-medium bg-cyan-500 text-white rounded-lg hover:scale-95 transition duration-300"
            >
              Login
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

export default Login;
