import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';
import FeaturesSection from './Component/FeaturesSection/FeaturesSection';
import SignIn from './Pages/SignInPage/SignIn';
import Signup from './Pages/Signup/Signup'; 
function App() {
  return (
<Router>
            <div className="App">
            <Routes>
                    <Route path="/" element={
                        <>
                        <Header />
                          <HeroSection />
                            <div className="custom-line1"></div>
                            <FeaturesSection />
                        </>
                    } />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;



