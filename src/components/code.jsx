import React from "react";
import PropTypes from "prop-types";

const GitHubRepo = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

GitHubRepo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default GitHubRepo;
