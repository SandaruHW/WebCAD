import React, { useState } from "react";
import "./SignIn.css";
import logo from "./webcad_logo.png";
const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="background">
      <div className="login-container">
      <div className="logo">
        <img src={logo} alt="WebCAD Logo" />
      </div>
        <h2>Login</h2>
        <p>Welcome Back! Log in to continue designing and bring your ideas to life.</p>
        <form>
          <div className="input-group">
            <label htmlFor="username"><i className="icon-email"></i></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username or email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"><i className="icon-password"></i></label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
              required
            />
            
          </div>
          <div className="options">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>
        <p>
          Don’t have an account yet? <a href="/register">Join WebCAD</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
