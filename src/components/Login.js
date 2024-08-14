import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("https://travel-server-iley.onrender.com/login-user", {
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
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Success");
          window.localStorage.setItem("token", data.data.token); // store the token
          window.localStorage.setItem("username", data.data.username); // store the username
          window.localStorage.setItem("loggedIn", true); // store loggedIn state
  
          // Add console.log here to debug
          console.log("Token:", window.localStorage.getItem("token"));
          console.log("Username:", window.localStorage.getItem("username"));
  
          window.location.href = "/"; // redirect to home
        } else {
          alert(data.error || "Login failed");
        }
      });
  }  

  render() {
    const { error } = this.state;

    return (
      <div className="form1-container">
        <form onSubmit={this.handleSubmit} className="form1">
          <p id="heading">Login</p>
          {error && <p className="error-message">{error}</p>}
          <div className="field1">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 6.5V7h12v-.5a1.5 1.5 0 0 0-3 0v.5H5v-.5a1.5 1.5 0 0 0-3 0z"></path>
              <path d="M14 8H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-1.5-3A2.5 2.5 0 0 1 15 7.5v.5H1v-.5A2.5 2.5 0 0 1 3.5 5h9z"></path>
            </svg>
            <input
              placeholder="Email"
              className="input-field"
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field1">
            <svg
              className="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
            </svg>
            <input
              placeholder="Password"
              className="input-field1"
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="btn1">
            <button className="button1">Login</button>
            <Link to="/Signup">
              <button className="button2">Sign Up</button>
            </Link>
          </div>
          <button className="button3">Forgot Password</button>
        </form>
      </div>
    );
  }
}
