import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-3 border-orange-500 rounded-md">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-4xl font-bold logo-gradient animate-logo ml-14">
          REACERNITY
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavLink exact to="/" className="px-4 py-2 hover:bg-gray-700 rounded">
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="px-4 py-2 hover:bg-gray-700 rounded"
          >
            About
          </NavLink>
          <NavLink
            to="/components"
            className="px-4 py-2 hover:bg-gray-700 rounded"
          >
            Components
          </NavLink>
          <NavLink to="/code" className="px-4 py-2 hover:bg-gray-700 rounded">
            Code
          </NavLink>
        </div>

        {/* Connect Us Link */}
        <div>
          <NavLink
            to="/connect-us"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-orange-600"
          >
            Connect Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
