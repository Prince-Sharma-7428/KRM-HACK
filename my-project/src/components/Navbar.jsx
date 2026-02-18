import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white/10 backdrop-blur-md text-white">
      <h1 className="text-2xl font-bold">SafeSphere</h1>

      
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-yellow-300 transition">
          About
        </Link>

        <Link to="/contact" className="hover:text-yellow-300 transition">
          Contact
        </Link>
        <Link to="/login" className="hover:text-yellow-300 transition">
          log-in/sign-in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
