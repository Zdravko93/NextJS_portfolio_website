"use client";

import React from "react";

import SectionHeading from "./SectionHeading.jsx";
import Project from "./Project.jsx";
import { projects } from "@/lib/data.js";
import { useActiveSection } from "@/lib/hooks.js";

export default function Projects() {
  const { ref } = useActiveSection("Projects", 0.7);

  return (
    <section ref={ref} id="projects" className="mt-40 px-6 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div className="flex flex-col gap-[2rem]">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
