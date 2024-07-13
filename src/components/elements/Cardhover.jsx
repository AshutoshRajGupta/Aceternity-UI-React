import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <p className="text-center font-bold text-2xl text-white mt-4">
        About My Expertise
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "MERN STACK",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    // link: "https://stripe.com",
  },
  {
    title: "PYHTON DEVELOPER",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    // link: "https://netflix.com",
  },
  {
    title: "SQL DEVELOPER",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    // link: "https://google.com",
  },
  {
    title: "AI DEVELOPER",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    // link: "https://meta.com",
  },
  {
    title: "REACT DEVELOPER",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    // link: "https://amazon.com",
  },
  {
    title: "ANDROID DEVELOPER",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
