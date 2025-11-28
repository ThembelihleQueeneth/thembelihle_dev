import { FaCode, FaTools } from "react-icons/fa";
import { LiaCodeBranchSolid } from "react-icons/lia";
import html from '../assets/html.png';
import bootstrap from '../assets/Bootstrap_logo.svg.png';
import css from '../assets/css3.png';
import git from '../assets/git.jpg';
import github from '../assets/github.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mysql from '../assets/MySQL-logo.png.webp';
import node from '../assets/nodejs.jpg';
import postgresql from '../assets/posgresql.png';
import react from '../assets/React-icon.svg.png';
import tailwind from '../assets/tailwind.png';
import typescript from '../assets/typescript.png';
import vercel from '../assets/vercel.png';

const techCategories = [
  {
    title: "Front-end",
    icon: <FaCode className="text-yellow-500 mr-2" />,
    skills: [
      { name: "HTML5", img: html },
      { name: "CSS3", img: css },
      { name: "Bootstrap", img: bootstrap },
      { name: "React", img: react },
      { name: "Tailwind CSS", img: tailwind },
      { name: "TypeScript", img: typescript },
      { name: "JavaScript", img: javascript },
    ],
  },
  {
    title: "Back-end",
    icon: <LiaCodeBranchSolid className="text-yellow-500 mr-2" />,
    skills: [
      { name: "Java", img: java },
      { name: "Node.js", img: node },
      { name: "MySQL", img: mysql },
      { name: "PostgreSQL", img: postgresql },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-yellow-500 mr-2" />,
    skills: [
      { name: "Git", img: git },
      { name: "GitHub", img: github },
      { name: "Vercel", img: vercel },
    ],
  },
];

export const TechStack = () => {
  return (
    <div className="py-20 px-60 bg-white text-black" id="stack">
      <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
        Tech Stack
      </h1>

      <div className="grid gap-12">
        {techCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="flex items-center text-2xl font-semibold mb-6">
              {category.icon} {category.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-xl shadow hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-gray-700 font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
