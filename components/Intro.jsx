"use client";

import React from "react";
import profileImg from "@/public/profile-picture.jpg";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/section-context";

export default function Intro() {
  const { ref } = useActiveSection("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="intro"
      className="mx-auto mt-28 max-w-[48rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center w-full">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
            }}
          >
            <Image
              src={profileImg}
              alt="Zdravko portrait"
              width="192"
              height="192"
              quality="96"
              priority={true}
              className="h-24 w-24 rounded-full object-cover 
                         border-[0.35rem] border-white shadow-2xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl right-0 bottom-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
              delay: 0.1,
              duration: 0.5,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl font-light font-sans
                  dark:text-white"
        initial={{ opacity: 0, y: 110 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Zdravko.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        creating engaging digital experiences with a strong focus on{" "}
        <span className="font-bold">React</span> and{" "}
        <span className="font-bold">Next.js</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4
                     text-lg font-medium"
        initial={{ opacity: 0, y: 110 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                       outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
                       transition font-sans
                      dark:bg-white dark:text-black
                      dark:hover:bg-black dark:hover:text-white"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 hover:opacity-100 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white  p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15]
                       transition border border-black/10
                       dark:bg-gray-200 dark:hover:bg-gray-100 "
          href="https://github.com/Zdravko93"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
