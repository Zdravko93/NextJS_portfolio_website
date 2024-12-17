import reactMemoryImg from "@/public/react-memory-game.png";
import interactiveCardDetailsImg from "@/public/interactive-card-details-form.png";
import mortgageCalculatorImg from "@/public/mortgage-repayment-calculator.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const projects = [
  {
    title: "React Memory Game",
    description:
      "Enjoyed building it, using technologies such as HTML, SASS/SCSS, JavaScript and React. One of my favourites.",
    tags: ["React", "JavaScript", "SASS/SCSS"],
    imageUrl: reactMemoryImg,
  },
  {
    title: "Interactive Card Details Form",
    description:
      "This project really made me go out of my way, encouraged me to try different aproaches.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: interactiveCardDetailsImg,
  },
  {
    title: "Mortgage Calculator App",
    description:
      "Self-explanatory, with calculating options such as 'Interest Only' and 'Repayment', with results displaying on the right hand side of the screen.",
    tags: ["HTML", "JavaScript", "Tailwind"],
    imageUrl: mortgageCalculatorImg,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
];
