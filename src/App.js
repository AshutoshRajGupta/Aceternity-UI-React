import "./App.css";
import { FlipWordsDemo } from "./components/elements/Flipwords.jsx";
import { EvervaultCardDemo } from "./components/elements/Evervault.jsx";
import { GlobeDemo } from "./components/elements/Globe.jsx";
import { BentoGridDemo } from "./components/elements/Bentogrid.jsx";
import { SparklesPreview } from "./components/elements/Sparkles.jsx";
import { FloatingNavDemo } from "./components/elements/Floating.jsx";
import { ThreeDCardDemo } from "./components/elements/Threedcard.jsx";
import { LampDemo } from "./components/elements/Lamp";
import { AnimatedModalDemo } from "./components/elements/Animatedmodal.jsx";
import { CardHoverEffectDemo } from "./components/elements/Cardhover.jsx";
import { AnimatedTooltipPreview } from "./components/elements/Animatedtoolpit";
import { CardStackDemo } from "./components/elements/Cardstack";
import { HeroScrollDemo } from "./components/elements/Containerscrollanimation";
import { InfiniteMovingCardsDemo } from "./components/elements/Infinitemovingcard";
import { TypewriterEffectSmoothDemo } from "./components/elements/Typewriter";
import { StickyScrollRevealDemo } from "./components/elements/Stickyscroll";
function App() {
  return (
    <div className="bg-black relative min-h-screen">
      {" "}
      <div className="absolute inset-0 z-0 ">
        {" "}
        <LampDemo />
      </div>
      <div className="z-00 relative">
        {" "}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 ml-20 p-20">
          <FlipWordsDemo />
          <AnimatedModalDemo />
        </div> */}
        <TypewriterEffectSmoothDemo />
        <AnimatedModalDemo />
        <CardHoverEffectDemo />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-20">
          <AnimatedTooltipPreview />
          <CardStackDemo />
        </div>
        <InfiniteMovingCardsDemo />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-20">
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-100">
        {" "}
        <FloatingNavDemo />
      </div>
      {/* <HeroScrollDemo /> */}
      {/* <FlipWordsDemo /> */}
      <StickyScrollRevealDemo />
    </div>
  );
}

export default App;
