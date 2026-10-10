import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex flex-col text-black">
      
      <Navbar />

      <div className="flex-grow px-6 py-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Have questions, suggestions, or need support? 
            We're here to help you stay safe.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="bg-[#dcdbda] backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold">📧 Email</p>
                <p className="opacity-90">support@safeher.com</p>
              </div>

              <div>
                <p className="font-semibold">📞 Phone</p>
                <p className="opacity-90">+91 1-112 (Emergency)</p>
              </div>

              <div>
                <p className="font-semibold">📍 Address</p>
                <p className="opacity-90">
                  SafeHer Technologies <br />
                  Bengaluru, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#dcdbda] backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/20 placeholder-black-200 focus:outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/20 placeholder-black-200 focus:outline-none"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/20 placeholder-black-200 focus:outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white  py-3 rounded-lg font-semibold hover:bg-[#7e7c7f] text-[#7e7c7f] hover:text-white transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;