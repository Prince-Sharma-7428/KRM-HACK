import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-white  flex flex-col text-white">
      
      <Navbar />

      <div className="flex-grow p-6 md:p-12">

        {/* Header Section */}
        <div className="bg-[#dcdbda] text-gray-800 rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            Woman Safety Social Trust Score Map
          </h1>
          <p className="text-gray-600 mb-2">
            Live dashboard for location-based alerts and assistance.
          </p>
          <p className="text-gray-600">
            20,000+ verified safe places, emergency alerts, and AI-powered monitoring.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <div className="bg-[#dcdbda] text-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Key Stats</h2>

            <ul className="space-y-4">
              <li>✔ Share with Family</li>
              <li>⚠ Notify Emergency</li>
              <li>● Verified Safe Stops</li>
            </ul>
          </div>

          <div className="bg-[#dcdbda] text-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>

            <div className="space-y-4">
              <button className="w-full bg-gray-100 py-2 rounded-md">
                Read FAQ
              </button>

              <button className="w-full bg-gray-100 py-2 rounded-md">
                Current Report
              </button>

              <button className="w-full bg-red-600 text-white py-3 rounded-md font-bold hover:bg-red-700 transition">
                +91 1-112
              </button>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;
