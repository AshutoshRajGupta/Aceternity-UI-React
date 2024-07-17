"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[10rem] w-[45rem] bg-black flex flex-col items-center justify-center overflow-hidden ">
      <h1 className="text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
        Aceternity With React
      </h1>
      <div className="w-[20rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(175px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
