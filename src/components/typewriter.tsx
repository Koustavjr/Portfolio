"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "I am a",
    
    },
    {
      text: "MERN stack",
      className: "text-3xl md:text-4xl lg:text-5xl text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      
    },
    {
      text: "and a",
     
    },
    {
      text: "Content Writer.",
      className: "text-3xl md:text-4xl lg:text-5xl text-blue-500 dark:text-blue-500",
    },
  ];
  const name = [
    {
      text: "Hi, ",
    },
    {
      text: "Koustav",
      className: "text-4xl md:text-4xl lg:text-7xl text-purple-500 dark:text-blue-500",
    },
    {
      text: "Chatterjee",
      className: "text-4xl md:text-4xl lg:text-7xl dark:text-blue-500",
    },
    {
      text: "this side",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] md:h=[]">
      <p className="text-neutral-600 dark:text-neutral-200 text-4xl sm:text-5xreml md:text-6xl lg:text-8xl xl:text-9xl">
        <TypewriterEffectSmooth words={name} />
      </p>
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <TypewriterEffectSmooth words={words} />
      </p>
    </div>
  );
}
