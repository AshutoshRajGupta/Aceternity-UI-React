import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blacks">
      <div className="bg-black-900 shadow-md rounded-md p-6 w-full max-w-8xl">
        <h2 className="text-4xl font-bold text-gradient mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
          About Us
        </h2>
        <p className="text-lg text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Welcome to our project! We are a team of passionate developers and
          designers working together to bring innovative solutions to the web.
          Our goal is to create cutting-edge and user-friendly web components
          that you can easily integrate into your own projects.
        </p>

        <h3 className="text-3xl font-semibold text-gradient mb-4 animate__animated animate__fadeIn animate__delay-3s">
          Our Mission
        </h3>
        <p className="text-lg text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-4s">
          Our mission is to empower developers by providing them with
          high-quality, reusable components that enhance productivity and
          simplify development workflows. We strive to keep up with the latest
          web trends and ensure our components are modern, lightweight, and
          accessible.
        </p>

        <h3 className="text-3xl font-semibold text-gradient mb-4 animate__animated animate__fadeIn animate__delay-5s">
          Meet The Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded-md shadow-md animate__animated animate__fadeIn animate__delay-6s">
            <h4 className="text-xl font-semibold text-gray-100 mb-2">
              John Doe
            </h4>
            <p className="text-gray-400">Lead Developer</p>
            <p className="text-gray-400 mt-2">
              John is a passionate web developer with a focus on frontend
              technologies. He loves solving complex problems and turning ideas
              into reality.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md shadow-md animate__animated animate__fadeIn animate__delay-7s">
            <h4 className="text-xl font-semibold text-gray-100 mb-2">
              Jane Smith
            </h4>
            <p className="text-gray-400">UI/UX Designer</p>
            <p className="text-gray-400 mt-2">
              Jane is a creative designer who strives to create beautiful,
              intuitive user interfaces. Her goal is to provide users with
              seamless experiences.
            </p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-gradient mb-4 mt-6 animate__animated animate__fadeIn animate__delay-8s">
          Our Values
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-300 animate__animated animate__fadeIn animate__delay-9s">
          <li>
            Innovation: We embrace new ideas and strive to push the boundaries
            of web development.
          </li>
          <li>
            Collaboration: We work together as a team and value each other’s
            contributions.
          </li>
          <li>
            Quality: We are committed to delivering high-quality components that
            are reliable and easy to use.
          </li>
          <li>
            Community: We believe in giving back to the developer community and
            making an impact with our work.
          </li>
        </ul>

        <h3 className="text-3xl font-semibold text-gradient mb-4 mt-6 animate__animated animate__fadeIn animate__delay-10s">
          Contact Us
        </h3>
        <p className="text-lg text-gray-300 mb-6 animate__animated animate__fadeIn animate__delay-11s">
          If you have any questions or would like to learn more about our
          project, feel free to get in touch with us. We're always happy to
          collaborate and share our knowledge!
        </p>

        <div className="flex justify-center mt-4">
          <a
            href="mailto:contact@project.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
