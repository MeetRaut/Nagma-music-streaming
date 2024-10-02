// src/components/Navbar.js
import React, { useState } from "react";
import Chatbot from "./Chatbot"; // Import the Chatbot component

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">

      {/* Logo and Name */}
      <div className="flex items-center space-x-2" href="#home">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-white" />
        <span className="text-xl font-bold">Nagma</span>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4 flex justify-end items-center"> {/* Added items-center here */}
        <input
          type="text"
          placeholder="Search..."
          className="w-64 px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Chatbot Icon */}
      <div className="relative mr-4"> {/* Add margin to separate from profile */}
        <Chatbot /> {/* Place the Chatbot component here as an icon */}
      </div>

      {/* Profile Icon */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none border-2 border-purple-500 rounded-full"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
            <ul className="py-1">
              <li>
                <a
                  href="#profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#logout"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
