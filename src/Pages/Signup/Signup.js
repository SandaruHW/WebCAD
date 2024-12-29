import React from "react";
import "./Signup.css";
import logo from "./webcad_logo.png";
const Signup = () => {
  return (
    <div className="container">
      <div className="signup-box">
      <div className="logo">
        <img src={logo} alt="WebCAD Logo" />
      </div>
        <h2>Create Account</h2>
        <p>Join WebCAD and bring your ideas to life!</p>
        <div className="social-signup">
          <button className="social-btn google-btn">
            <span>Sign up with Google</span>
          </button>
          <button className="social-btn linkedin-btn">
            <span>Sign up with LinkedIn</span>
          </button>
        </div>
        <hr />
        <p className="or-text">OR</p>
        <form className="signup-form">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            required
          />

          <label htmlFor="confirm-password">Confirm Password*</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Re-enter password"
            required
          />

          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p className="login-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

