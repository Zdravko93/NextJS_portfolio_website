"use client";

import React from "react";

import { skills } from "@/lib/data.js";
import SectionHeading from "./SectionHeading.jsx";
import { useActiveSection } from "@/lib/hooks.js";
import { motion } from "framer-motion";

const animationVariants = {
  initial: { opacity: 0, y: 110 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useActiveSection("Skills", 0.2);

  return (
    <section
      ref={ref}
      id="skills"
      className="mx-auto mt-40 scroll-mt-28 max-w-[48rem] text-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg font-sans">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white rounded-xl px-5 py-2 border border-black/[0.1]
                      dark:bg-white/10 dark:text-white/80"
            key={index}
            custom={index}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
