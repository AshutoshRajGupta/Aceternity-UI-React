// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-3 border-orange-500 rounded-md">
//       <div className="flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-4xl font-bold logo-gradient animate-logo ml-14">
//           REACERNITY
//         </div>

//         {/* Navigation Links */}
//         <div className="flex space-x-8">
//           <NavLink exact to="/" className="px-4 py-2 hover:bg-gray-700 rounded">
//             Home
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             className="px-4 py-2 hover:bg-gray-700 rounded"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/components"
//             className="px-4 py-2 hover:bg-gray-700 rounded"
//           >
//             Components
//           </NavLink>
//         </div>

//         {/* Connect Us Link */}
//         <div>
//           <NavLink
//             to="/connect-us"
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-orange-600"
//           >
//             Connect Us
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 rounded-md shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
          REACERNITY
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `relative px-5 py-2 text-lg font-semibold transition-all rounded-lg ${
                isActive
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-300 hover:text-orange-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `relative px-5 py-2 text-lg font-semibold transition-all rounded-lg ${
                isActive
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-300 hover:text-orange-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              `relative px-5 py-2 text-lg font-semibold transition-all rounded-lg ${
                isActive
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-300 hover:text-orange-500"
              }`
            }
          >
            Components
          </NavLink>
        </div>

        {/* Connect Us Link */}
        <div>
          <NavLink
            to="/connect-us"
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-semibold text-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
          >
            Connect Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
