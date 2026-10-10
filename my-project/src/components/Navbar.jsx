import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-[#7e7c7f] backdrop-blur-md text-white">
      <h1 className="text-2xl font-bold">SafeSphere</h1>

      
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#f4eedc] transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-[#f4eedc] transition">
          About
        </Link>
        <a
          href="/livemap"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#f4eedc] transition"
        >
          Live Map
        </a>
        <Link to="/contact" className="hover:text-[#f4eedc] transition">
          Contact
        </Link>
        <Link to="/login" className="hover:text-[#f4eedc] transition">
          log-in/sign-in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
