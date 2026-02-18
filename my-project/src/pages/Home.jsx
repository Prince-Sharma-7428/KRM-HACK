import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex flex-col text-white">
      
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold mb-6">
          Empowering Women Through Technology
        </h2>

        <p className="max-w-2xl text-lg mb-8">
          Real-time safety alerts, emergency tracking, and AI-powered
          protection — all in one smart app.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="bg-white text-gray-800 py-20 px-10 rounded-t-3xl">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Features
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-4">
              Live Location Sharing
            </h4>
            <p>
              Share your real-time location with trusted contacts instantly.
            </p>
          </div>

          <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-4">
              Emergency SOS
            </h4>
            <p>
              One-tap emergency alert system with auto-call & message support.
            </p>
          </div>

          <div className="bg-purple-100 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
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
