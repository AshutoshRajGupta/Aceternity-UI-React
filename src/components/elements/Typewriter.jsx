"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "A",
    },
    {
      text: "Passionate",
    },
    {
      text: "&",
    },
    {
      text: "Dedicated",
    },
    {
      text: "Software-Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-black-600 dark:text-neutral-200 text-xs sm:text-2xl font-extrabold mb-8 ">
        Hi I'm Ashutosh Raj Gupta
      </p>
      <p className="text-white dark:text-neutral-200 text-xs sm:text-2xl font-bold mb-6">
        "Transforming visions into reality through software engineering."
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
        <a
          href="https://www.linkedin.com/in/ashutosh-raj-gupta-18230820b/"
          target="_blank"
          className="no-underline"
        >
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Linkeldn
          </button>
        </a>
        <a
          href="https://ashutoshrajgupta.github.io/Me/"
          target="_blank"
          className="no-underline"
        >
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Portfolio
          </button>
        </a>
      </div>
    </div>
  );
}
