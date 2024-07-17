import React from "react";
import { SparklesPreview } from "./elements/Sparkles";

const Home = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-white mb-4">
        Acertenity with React
      </h1>
      <SparklesPreview />
      <p className="text-lg text-gray-300">
        Some more text with sparkle animation
      </p>
    </div>
  );
};

export default Home;
