"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundBeams } from "./ui/background-beams";

const skills = [
    {
      "id": 1,
      "name": "React",
      "designation": "Library",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      "id": 2,
      "name": "MongoDB",
      "designation": "Database",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      "id": 3,
      "name": "Express.js",
      "designation": "Framework",
      "image": "https://i.pinimg.com/236x/5d/09/32/5d0932d4dd17c926806635893260205e.jpg"
    },
    {
      "id": 4,
      "name": "Node.js",
      "designation": "Runtime",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      "id": 5,
      "name": "Docker",
      "designation": "Tool",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      "id": 6,
      "name": "Python",
      "designation": "Language",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      "id": 7,
      "name": "JavaScript",
      "designation": "Language",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      "id": 8,
      "name": "Java",
      "designation": "Language",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      "id": 9,
      "name": "Git",
      "designation": "Tool",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      "id": 10,
      "name": "Canva",
      "designation": "Tool",
      "image": "https://i.pinimg.com/736x/a7/80/3e/a7803e321be386b043228963e7a727c6.jpg"
    },
    {
      "id": 11,
      "name": "Figma",
      "designation": "Tool",
      "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      "id": 12,
      "name": "Next.js",
      "designation": "Framework",
      "image": "https://i.pinimg.com/236x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg"
    }
  ];
  
  

export function Skills() {
  return (
    <div className="relative h-[20rem] overflow-hidden">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">Skills</h2>
       
     <div className="flex flex-row items-center justify-center mb-6 w-full">
        <AnimatedTooltip items={skills}/>
       <BackgroundBeams/>
    </div>

    </div>
    
    
  
  );
}
