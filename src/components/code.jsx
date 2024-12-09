import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Define component code with multiple files
const componentCode = {
  GlobeDemo: {
    files: [
      {
        name: "GlobeDemo.js",
        content: `https://github.com/username/repository/blob/main/GlobeDemo.js`,
      },
      {
        name: "GlobeStyles.css",
        content: `https://github.com/username/repository/blob/main/GlobeStyles.css`,
      },
    ],
  },
  SparklesPreview: {
    files: [
      {
        name: "SparklesPreview.js",
        content: `https://github.com/username/repository/blob/main/SparklesPreview.js`,
      },
      {
        name: "SparklesPreview.css",
        content: `https://github.com/username/repository/blob/main/SparklesPreview.css`,
      },
    ],
  },
  // Add more components similarly
};

const GitHubRepo = () => {
  const { componentName } = useParams();
  const component = componentCode[componentName];
  const navigate = useNavigate(); // To navigate programmatically

  // Manage copied state for each file
  const [copied, setCopied] = useState(null); // Store the index of the copied file

  if (!component) {
    return <p>Component code not found!</p>;
  }

  const handleCopy = (link, index) => {
    navigator.clipboard.writeText(link);
    setCopied(index); // Set the copied file index
    setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
  };

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div
      className="flex justify-center items-start mt-10"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {componentName} Code
        </h2>

        {/* Back Button with Arrow */}
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          <span className="mr-2">←</span> Back to Components
        </button>

        {component.files.map((file, index) => (
          <div key={index} className="mb-8">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              {file.name}
            </h3>
            <div className="relative bg-gray-100 rounded-md p-4 shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                {/* GitHub Link */}
                <a
                  href={file.content.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline break-words"
                  style={{ fontSize: "1rem" }}
                >
                  {file.content.trim()}
                </a>
                {/* Copy Button */}
                <button
                  className={`w-8 h-8 flex items-center justify-center rounded-full shadow-md transition focus:outline-none ${
                    copied === index
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => handleCopy(file.content.trim(), index)}
                  title={copied === index ? "Link Copied!" : "Copy Link"}
                >
                  {copied === index ? "✔️" : "📋"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Configuration Steps */}
        <div className="mt-12 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            How to Configure in Your React Project
          </h3>
          <ul className="list-decimal pl-6 text-lg text-gray-700">
            <li>
              First, clone the repository or copy the required files for the
              component.
            </li>
            <li>
              Make sure you have React and necessary dependencies installed in
              your project. You can install them using:
              <pre className="bg-gray-200 p-2 mt-2 rounded-md">
                <code>npm install react react-dom</code>
              </pre>
            </li>
            <li>
              Import the component and its CSS file into your React project:
              <pre className="bg-gray-200 p-2 mt-2 rounded-md">
                <code>
                  import GlobeDemo from "./components/GlobeDemo"; import
                  "./components/GlobeStyles.css";
                </code>
              </pre>
            </li>
            <li>
              Use the component within your React app:
              <pre className="bg-gray-200 p-2 mt-2 rounded-md">
                <code>&lt;GlobeDemo /&gt;</code>
              </pre>
            </li>
            <li>
              Ensure the component is rendered in the desired location within
              your app.
            </li>
            <li>
              Customize the component as needed by passing props and modifying
              styles.
            </li>
            <li>
              That's it! Your component is now integrated and ready to use.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GitHubRepo;
