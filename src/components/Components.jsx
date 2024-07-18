import React from "react";
import { FlipWordsDemo } from "./elements/Flipwords";
import { EvervaultCardDemo } from "./elements/Evervault.jsx";
import { GlobeDemo } from "./elements/Globe.jsx";
import { BentoGridDemo } from "./elements/Bentogrid.jsx";
import { SparklesPreview } from "./elements/Sparkles.jsx";
import { FloatingNavDemo } from "./elements/Floating.jsx";
import { ThreeDCardDemo } from "./elements/Threedcard.jsx";
import { LampDemo } from "./elements/Lamp";
import { AnimatedModalDemo } from "./elements/Animatedmodal.jsx";
import { CardHoverEffectDemo } from "./elements/Cardhover.jsx";
import { AnimatedTooltipPreview } from "./elements/Animatedtoolpit";
import { CardStackDemo } from "./elements/Cardstack";
import { HeroScrollDemo } from "./elements/Containerscrollanimation";
import { InfiniteMovingCardsDemo } from "./elements/Infinitemovingcard";
import { TypewriterEffectSmoothDemo } from "./elements/Typewriter";
import { StickyScrollRevealDemo } from "./elements/Stickyscroll";
import { AnimatedPinDemo } from "./elements/ThreeDpin";
import { SignupFormDemo } from "./elements/SignForm";
import { TextGenerateEffectDemo } from "./elements/Textgenerate";
import { BorderButton } from "./elements/GlowButton";

const Component = () => {
  return (
    <div className="bg-black relative min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
        <div className="component-container bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
          <GlobeDemo />
          <p className="text-white text-center mt-2">
            This is the Globe component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>

        <div className="component-container bg-blue-800 rounded-lg border-2 border-blue-700 p-2 mt-4 flex flex-col items-center">
          <div className="flex justify-center items-center h-48 mt-48">
            <SparklesPreview />
          </div>
          <p className="text-white text-center mt-2">
            This is the Sparkles component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>

        {/* <div className="component-container bg-green-800 rounded-lg border-2 border-green-700 p-4">
          <FloatingNavDemo />
          <p className="text-white text-center mt-2">
            This is the Floating Nav component
          </p>
          <a href="#" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div> */}
        <div className="component-container bg-purple-800 rounded-lg border-2 border-purple-700 p-4">
          <FlipWordsDemo />
          <p className="text-white text-center mt-2">
            This is the Flip Words component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {" "}
              from View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
          <TypewriterEffectSmoothDemo />
          <p className="text-white text-center mt-2">
            This is the Typewriter Effect component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-blue-800 rounded-lg border-2 border-blue-700 p-4">
          <div className="flex justify-center items-center h-48 mt-48">
            <AnimatedModalDemo />
          </div>
          <p className="text-white text-center mt-2">
            This is the Animated Modal component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-green-800 rounded-lg border-2 border-green-700 p-4">
          <CardHoverEffectDemo />
          <p className="text-white text-center mt-2">
            This is the Card Hover component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-purple-800 rounded-lg border-2 border-purple-700 p-4">
          <HeroScrollDemo />
          <p className="text-white text-center mt-2">
            This is the Hero Scroll component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
          <InfiniteMovingCardsDemo />
          <p className="text-white text-center mt-2">
            This is the Infinite Cards component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-blue-800 rounded-lg border-2 border-blue-700 p-4">
          <div className="flex justify-center items-center h-48 mt-38">
            <AnimatedTooltipPreview />
          </div>

          <p className="text-white text-center mt-2">
            This is the Animated Tooltip component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button
              className
              with="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-green-800 rounded-lg border-2 border-green-700 p-4">
          <CardStackDemo />
          <p className="text-white text-center mt-2">
            This is the Card Stack component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-purple-800 rounded-lg border-2 border-purple-700 p-4">
          <div className="flex justify-center items-center h-48 mt-48">
            <BorderButton />
          </div>

          <p className="text-white text-center mt-2">
            This is the Border Button component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
          <ThreeDCardDemo />
          <p className="text-white text-center mt-2">
            This is the 3D Card 1 component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>

        <div className="component-container bg-purple-800 rounded-lg border-2 border-purple-700 p-4">
          <AnimatedPinDemo />
          <p className="text-white text-center mt-2">
            This is the Animated Pin component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-gray-800 rounded-lg border-2 border-gray-700 p-4">
          <BentoGridDemo />
          <p className="text-white text-center mt-2">
            This is the Bento Grid component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-blue-800 rounded-lg border-2 border-blue-700 p-4">
          <EvervaultCardDemo />
          <p className="text-white text-center mt-2">
            This is the Evervault Card component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-green-800 rounded-lg border-2 border-green-700 p-4">
          <StickyScrollRevealDemo />
          <p className="text-white text-center mt-2">
            This is the Sticky Scroll component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
        <div className="component-container bg-purple-800 rounded-lg border-2 border-purple-700 p-4">
          <SignupFormDemo />
          <p className="text-white text-center mt-2">
            This is the Signup Form component
          </p>
          <a href="/code" className="block text-center mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Component;
