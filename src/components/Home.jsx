import React from "react";
import { FlipWordsDemo } from "./elements/Flipwords";
import { HeroScrollDemo } from "./elements/Containerscrollanimation";
import RotatingWords from "./RotatingWords";
import { TextGenerateEffectDemo } from "./elements/Textgenerate";
import { AnimatedPinDemo } from "./elements/ThreeDpin";

const Home = () => {
  const words = ["amazing", "incredible", "awesome"]; // Add more words as needed
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mt-8">
        Acertenity with React
      </h1>

      <h1 className="text-4xl font-bold text-white mt-14">
        Make your websites look 10x{" "}
        <RotatingWords words={words} interval={2000} />
      </h1>
      <div className=" mt-14">
        <TextGenerateEffectDemo />
      </div>
      <div className="flex justify-center items-center">
        <div className=" justify-center items-center ml-20 mt-0">
          <FlipWordsDemo />
          {/* <AnimatedPinDemo /> */}
        </div>
        <div className="justify-center items-center ml-20 mt-0">
          <AnimatedPinDemo />
        </div>
      </div>
      <HeroScrollDemo />
    </div>
  );
};

export default Home;
