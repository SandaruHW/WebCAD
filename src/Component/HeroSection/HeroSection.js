import React from 'react';
import { useNavigate } from "react-router-dom";

import './HeroSection.css';
import heroImage from './hero-image.jpeg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
      navigate("/signin");
  };
  const handleCreateAccountClick = () => {
    navigate("/signup");
  };
  return (
 
    <section className="hero">
      <div className="hero-content">
        <h1>Revolutionize<br /> Design with<br /> WebCAD</h1>
        <p>Design, Collaborate, and Innovate<br /> All from Your Browser.</p>
        <div className="hero-buttons">
        
        <button className="hero-buttons button:first-of-type" onClick={handleSignInClick}>Sign In</button>
      <br /> <br /><br/>
          
        <button className="hero-buttons button:last-of-type" onClick={handleCreateAccountClick}>Create Account</button>
     
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Laptop with design tools" className="hero-image" />
      </div>

      
    </section>
    
    
  );
};

export default HeroSection;



