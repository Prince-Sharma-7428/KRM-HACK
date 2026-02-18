import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#7e7c7f] from-purple-600 to-pink-500 flex flex-col text-white">
      {/* Hero Section */}
{/* <div className="relative min-h-screen bg-[url('/images/mainbg.jpg')] bg-cover bg-center flex items-center justify-center text-white"> */}

      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
<div className="bg-[url('/images/mainbg.jpg')] bg-cover bg-center flex-grow flex flex-col items-center justify-center text-center px-6 py-24 text-white">

        <h2 className="text-5xl font-bold mb-6 text-[#f4eedc]">
          Empowering Women Through Technology
        </h2>

        <p className="max-w-2xl text-lg mb-8 text-white">
          Real-time safety alerts, emergency tracking, and AI-powered
          protection — all in one smart app.
        </p>

        <button
          onClick={() => navigate("/login")}
          className=" px-8 py-3 rounded-full font-semiboldtransition px-8 z-30 py-4 bg-[#dcdbda] rounded-md text-[#7e7c7f] relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#7e7c7f] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  text-2xl hover:text-[#dcdbda]
"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-[#f4eedc] text-gray-800 py-20 px-10 rounded-t-3xl">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Features
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-white">
          <div className="bg-[#7e7c7f] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-4">
              Live Location Sharing
            </h4>
            <p>
              Share your real-time location with trusted contacts instantly.
            </p>
          </div>

          <div className="bg-[#7e7c7f] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-4">
              Emergency SOS
            </h4>
            <p>
              One-tap emergency alert system with auto-call & message support.
            </p>
          </div>

          <div className="bg-[#7e7c7f] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-4">
              AI Threat Detection
            </h4>
            <p>
              Smart AI system that detects unsafe patterns & alerts users.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
