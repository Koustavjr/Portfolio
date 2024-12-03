"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Blogs",
      link: "https://kossblogs.hashnode.dev/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1EQ8qhYWflp7VzFa5MWxPv98VIJq_g3sQ/view?usp=drive_link",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "https://heylink.me/koustav21/",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems}/>
      
    </div>
  );
}
