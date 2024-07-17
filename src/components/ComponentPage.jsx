import React, { useState } from "react";
import PropTypes from "prop-types";
import GitHubRepo from "./code";

// Component details including title, image URL, description, and two code files
const componentDetails = {
  Globe: {
    title: "Globe Component",
    imageUrl: "path/to/globe/image.jpg",
    description: "This is the Globe component.",
    code1: `
import React from 'react';

const Globe = () => {
  return <div>Globe Component Code Part 1</div>;
};

export default Globe;
    `,
    code2: `
import React from 'react';

const GlobeHelper = () => {
  return <div>Globe Component Code Part 2</div>;
};

export default GlobeHelper;
    `,
  },
  Sparkles: {
    title: "Sparkles Component",
    imageUrl: "path/to/sparkles/image.jpg",
    description: "This is the Sparkles component.",
    code1: `
import React from 'react';

const Sparkles = () => {
  return <div>Sparkles Component Code Part 1</div>;
};

export default Sparkles;
    `,
    code2: `
import React from 'react';

const SparklesHelper = () => {
  return <div>Sparkles Component Code Part 2</div>;
};

export default SparklesHelper;
    `,
  },
  // Add details for other components similarly...
};

const ComponentPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const componentKeys = Object.keys(componentDetails);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="componentDropdown"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Component:
        </label>
        <select
          id="componentDropdown"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleComponentChange}
        >
          <option value="">Select a component</option>
          {componentKeys.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      {selectedComponent && (
        <div>
          <GitHubRepo
            imageUrl={componentDetails[selectedComponent].imageUrl}
            title={componentDetails[selectedComponent].title}
            description={componentDetails[selectedComponent].description}
          />
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Code Part 1:</h3>
            <pre className="bg-gray-800 text-white p-4 rounded relative">
              <code>{componentDetails[selectedComponent].code1}</code>
              <button
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() =>
                  copyToClipboard(componentDetails[selectedComponent].code1)
                }
              >
                Copy
              </button>
            </pre>
          </div>
          <div className="mt-4 bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Code Part 2:</h3>
            <pre className="bg-gray-800 text-white p-4 rounded relative">
              <code>{componentDetails[selectedComponent].code2}</code>
              <button
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() =>
                  copyToClipboard(componentDetails[selectedComponent].code2)
                }
              >
                Copy
              </button>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentPage;
