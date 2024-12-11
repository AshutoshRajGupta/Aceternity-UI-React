import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-md rounded-md p-6 w-full max-w-6xl text-gray-300">
        <h2 className="text-4xl text-red-600 font-bold text-gradient mb-6 mt-6 text-center animate__animated animate__fadeIn animate__delay-1s">
          About Reacernity
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
          <b>
            <span className="text-green-500">Welcome to Reacernity!</span>
          </b>{" "}
          Our project focuses on simplifying the use of **Acertinity
          components**, originally built with Next.js and TypeScript, by
          providing easy-to-use and pre-configured React.js implementations. We
          ensure that developers who prefer or work with React can seamlessly
          integrate these components into their projects without having to worry
          about language or framework compatibility.
        </p>

        <h3 className="text-3xl text-blue-600 text-center font-semibold text-gradient mb-4 animate__animated animate__fadeIn animate__delay-3s">
          <b>Our Mission</b>
        </h3>
        <p className="text-lg mb-6 text-orange-400 animate__animated animate__fadeIn animate__delay-4s">
          At Reacernity, our mission is to empower developers with high-quality,
          reusable components. We focus on enhancing productivity while ensuring
          that our solutions are modern, lightweight, and accessible.
        </p>

        <h3 className="text-3xl text-center text-yellow-400 font-semibold text-gradient mb-4 animate__animated animate__fadeIn animate__delay-5s">
          Meet The Developer
        </h3>
        <div className="flex items-center gap-6 bg-gray-700 p-4 rounded-md shadow-md animate__animated animate__fadeIn animate__delay-6s">
          <img
            src="https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-500 shadow-md"
          />
          <div>
            <h4 className="text-xl font-bold text-pink-600 mb-1">
              Ashutosh Raj Gupta
            </h4>
            <p className="text-green-400">
              <b>Lead Developer</b>
            </p>
            <p className="text-gray-400 mt-2">
              Passionate about simplifying web development with reusable
              components. Building Reacernity to bridge Next.js and React.js
              seamlessly.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-center text-amber-700 text-gradient mb-4 mt-6 animate__animated animate__fadeIn animate__delay-7s">
          Our Values
        </h3>
        <ul className="list-disc pl-6 text-lg animate__animated animate__fadeIn animate__delay-8s">
          <li>
            <strong>Innovation:</strong> Embracing new ideas to redefine web
            development.
          </li>
          <li>
            <strong>Quality:</strong> Delivering reliable and easy-to-use
            components.
          </li>
          <li>
            <strong>Community:</strong> Supporting developers with modern tools
            and resources.
          </li>
        </ul>

        <h3 className="text-3xl text-center text-green-600 font-bold text-gradient mb-4 mt-6 animate__animated animate__fadeIn animate__delay-9s">
          Contact Us
        </h3>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-10s">
          Have questions or feedback? Reach out to us, and let's collaborate to
          make web development better!
        </p>

        <div className="flex justify-center mt-4">
          <a
            href="mailto:contact@reacernity.com"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
