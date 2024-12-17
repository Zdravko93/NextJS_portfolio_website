"use client";

import React from "react";

import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "@/context/theme-context.jsx";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-[1rem] left-[3rem]  w-[2.7rem] h-[2.7rem] shadow-lg rounded-full flex items-center justify-center border border-white border-opacity-30
                       hover:scale-[1.1] active:scale-105 transition-all
                       dark:bg-gray-900"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="bg-transparent" /> : <BsMoon />}
    </button>
  );
}
