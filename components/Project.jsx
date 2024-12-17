"use client";

import React, { useRef } from "react";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({ title, description, tags, imageUrl }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mx-auto max-w-[50rem]"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section
        className="relative flex flex-col sm:flex-row mx-auto max-w-[42rem] rounded-lg 
                 bg-gray-100 hover:bg-gray-200 transition overflow-hidden 
                   border cursor-pointer
                 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white
                   dark:border-none"
      >
        <div
          className="flex flex-col h-full pt-4 pb-7 px-5
                   sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
                   sm:group-even:ml-[20rem]"
        >
          <h3 className="text-2xl font-semibold font-sans ">{title}</h3>
          <p
            className="leading-relaxed text-gray-700 mt-2 font-sans 
                      dark:text-white/70"
          >
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] text-white text-xs uppercase rounded-full 
                           py-1 px-3 font-sans
                           dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-8 -right-40 rounded-t-lg w-[28rem] object-cover sm:block hidden
                     shadow-2xl h-full
                     transition
                     group-hover:scale-[1.05]
                     group-hover:-translate-x-5
                     group-hover:translate-y-5
                     group-hover:-rotate-3
                     group-even:group-hover:translate-x-5
                     group-even:group-hover:translate-y-5
                     group-even:group-hover:rotate-3
                     group-even:right-[initial]
                     group-even:-left-40"
          src={imageUrl}
          alt="My project"
          quality={96}
        />
      </section>
    </motion.div>
  );
}
