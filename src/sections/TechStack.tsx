import { FaCode, FaTools } from "react-icons/fa";
import { LiaCodeBranchSolid } from "react-icons/lia";

const techCategories = [
  {
    title: "Front-end",
    icon: <FaCode className="text-yellow-500 mr-2" />,
    skills: [
      { name: "HTML5", img: "/html.png" },
      { name: "CSS3", img: "/css3.png" },
      { name: "Bootstrap", img: "/Bootstrap_logo.svg.png" },
      { name: "React", img: "/React-icon.svg.png" },
      { name: "Tailwind CSS", img: "/tailwind.png" },
      { name: "TypeScript", img: "/typescript.png" },
      { name: "JavaScript", img: "/javascript.png" },
    ],
  },
  {
    title: "Back-end",
    icon: <LiaCodeBranchSolid className="text-yellow-500 mr-2" />,
    skills: [
      { name: "Java", img: "/java.png" },
      { name: "Node.js", img: "/nodejs.jpg" },
      { name: "MySQL", img: "/MySQL-logo.png.webp" },
      { name: "PostgreSQL", img: "/posgresql.png" },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-yellow-500 mr-2" />,
    skills: [
      { name: "Git", img: "/git.jpg" },
      { name: "GitHub", img: "/github.png" },
      { name: "Vercel", img: "/vercel.png" },
    ],
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 px-6 md:px-20 lg:px-40 bg-white text-black" id="stack">
      <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center">
        Tech Stack
      </h1>

      <div className="space-y-16">
        {techCategories.map((category, idx) => (
          <div key={idx}>
            <h2 className="flex items-center text-2xl font-semibold mb-6">
              {category.icon} {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-gray-50 p-5 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-14 h-14 object-contain mb-3"
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
    </section>
  );
};
