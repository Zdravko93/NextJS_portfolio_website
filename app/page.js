import React from "react";

import Intro from "../components/Intro.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}
