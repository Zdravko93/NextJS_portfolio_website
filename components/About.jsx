"use client";

import React from "react";

import SectionHeading from "./SectionHeading.jsx";
import { motion } from "framer-motion";
import { useActiveSection } from "../lib/hooks.js";

export default function About() {
  const { ref } = useActiveSection("About", 0.9);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mx-auto mt-40 scroll-mt-28 max-w-[47rem] text-center px-6"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.3,
      }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="text-sm sm:text-lg font-sans font-light">
        As a self-taught web developer, I'm passionate about creating seamless,
        user-friendly websites that solve real problems. With a strong
        foundation built through hands-on projects, I focus on delivering
        polished, efficient results and continuously expanding my skill set. I
        thrive on challenges, enjoy learning new technologies, and am always
        eager to turn ideas into functional digital experiences.
      </p>
      <p className="mt-3 text-sm sm:text-lg font-sans font-light">
        For me, frontend development is not just a job, but a{" "}
        <span className="font-semibold underline italic">passion</span>.{" "}
        <span className="font-semibold underline italic">
          It's not about what you do — it's how you do it!
        </span>{" "}
        My goal is to make every project a success while constantly growing and
        refining my craft. Let's bring your vision to life!
      </p>
    </motion.section>
  );
}
