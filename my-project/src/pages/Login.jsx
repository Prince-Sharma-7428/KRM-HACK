import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-[#f4eedcc7ced6] flex flex-col text-white">
      
      <Navbar />

      {/* Center Card */}
      <div className="flex-grow flex items-center justify-center px-6 py-16">

        <div className="bg-[#7e7c7f] backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">

          <h2 className="text-2xl font-bold text-center mb-6">
            Join a safer community
          </h2>

          {/* Tabs */}
          <div className="flex mb-6 border border-white/30 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab("login")}
              className={`w-1/2 py-2 transition ${
                activeTab === "login"
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setActiveTab("signup")}
              className={`w-1/2 py-2 transition ${
                activeTab === "signup"
                  ? "bg-white text-black font-semibold"
                  : "bg-transparent"
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username only for Sign Up */}
            {activeTab === "signup" && (
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:outline-none"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/20 placeholder-white focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-[#dcdbda] hover:text-[#7e7c7f] transition"
            >
              {activeTab === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          {activeTab === "login" && (
            <p className="text-center text-sm mt-4 underline cursor-pointer">
              Forgot password?
            </p>
          )}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Login;
    