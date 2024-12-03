"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "I am",
    },
    {
      text: "a MERN stack",
      className:"text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
    },
    {
      text: "and a",
    },
    {
      text: "Content Writer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const name = [
    {
      text:"Hi, "
    },
    {
      text: "Koustav",
      className:"text-purple-500 dark:text-blue-500"
    },
    {
      text: "Chatterjee",
      className:"dark:text-blue-500"
    },
    {
      text:"this side"
    }
     
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-9xl sm:text-base  ">
       <TypewriterEffectSmooth words={name}/>
      </p>
      <TypewriterEffectSmooth words={words} />
     
    </div>
  );
}
