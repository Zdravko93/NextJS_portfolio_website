"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { useActiveSectionContext } from "../context/section-context.jsx";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[1000] relative ">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[3.25rem] bg-white/[0.8] border-white border-opacity-4 opacity-80  
                   w-full rounded-none border border-black/2
                   shadow-md  backdrop-blur-sm 
                   sm:top-6 sm:w-[36rem] sm:rounded-full
                   dark:bg-gray-950/[0.7] dark:border-black/40 dark:shadow-sm"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="fixed flex -top-[0.1rem] left-1/2 -translate-x-1/2 h-12 py-2
                  sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex items-center gap-2 text-[0.9rem] w-[24rem] 
                     font-medium text-gray-500
                     sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center w-full p-3 text-gray-500 font-semibold hover:text-black font-sans transition  dark:text-gray-300 dark:hover:text-white",
                  {
                    "text-white hover:text-white dark:text-gray-50":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className={`absolute inset-0 -z-10 bg-black/[0.9] dark:bg-white/[0.1] rounded-full`}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffnes: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
