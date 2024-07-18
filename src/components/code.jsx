import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const GitHubRepo = ({ imageUrl, title, description, repoUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex items-center justify-between mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-16 h-16 object-cover rounded-full"
        />
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

GitHubRepo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default GitHubRepo;
