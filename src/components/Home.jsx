import React from "react";
import { FlipWordsDemo } from "./elements/Flipwords";
import { HeroScrollDemo } from "./elements/Containerscrollanimation";
import RotatingWords from "./RotatingWords";
import { TextGenerateEffectDemo } from "./elements/Textgenerate";
import { AnimatedPinDemo } from "./elements/ThreeDpin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { AnimatedTooltipPreview } from "./elements/Animatedtoolpit";

const Home = () => {
  const words = ["amazing", "incredible", "awesome"]; // Add more words as needed
  return (
    <div className="text-left ml-8">
      <div className="flex justify-between items-center mt-16 ml-12 mr-12">
        <div className="flex-shrink-0">
          <h1 className="text-4xl font-bold text-green-400 text-pretty">
            Acertenity with React
          </h1>
        </div>
        <div className="flex-shrink-0">
          <AnimatedTooltipPreview />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-white mt-14 ml-12">
        Make your websites look 10x{" "}
        <RotatingWords words={words} interval={2000} />
      </h1>

      <div className="mt-14 ml-12 mr-8 box-border bg-gradient-to-r from-green-300 to-blue-500 p-4 rounded-lg shadow-xl shadow-green-500/50">
        <TextGenerateEffectDemo />
      </div>

      <div className="flex justify-between items-center mt-0 ml-24">
        <div className="flex justify-start items-center">
          <FlipWordsDemo />
        </div>
        <div className="flex justify-end items-center mr-32 p-2">
          {" "}
          {/* Added margin-right */}
          <AnimatedPinDemo />
        </div>
      </div>

      <div className="mt-0">
        <HeroScrollDemo />
      </div>
    </div>
  );
};

export default Home;
