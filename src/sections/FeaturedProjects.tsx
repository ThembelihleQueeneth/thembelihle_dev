import { useState } from "react";
import { Button } from "../components/Button";
import { FaEye, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Images (now in public folder)
const studio = "/studio88.jpg";
const lawyer = "/law.png";
const converterHub = "/converter.png";
const grocery = "/grocery.png";
const blog = "/blog.jpeg";
const spane4all = "/spane4all.png";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  tech: string[];
  live: string;
  code: string;
}

export const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: studio,
      title: "Studio 88 Clone",
      desc: "A responsive e-commerce website clone featuring product listings, shopping cart functionality, and a secure checkout process.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://studio88-clone.vercel.app/",
      code: "https://github.com/ThembelihleQueeneth/studio88Clone.git"
    },
    {
      image: lawyer,
      title: "Attorney Firm",
      desc: "A profile for an Attorney Firm.",
      tech: ["React", "Tailwind", "TypeScript"],
      live: "https://lawyer-website-eight-beta.vercel.app/",
      code: "https://github.com/ThembelihleQueeneth/lawyer-website.git"
    },
    {
      image: blog,
      title: "Tech-Talk-Blog",
      desc: "A blog platform with authentication, article management, and an interactive commenting system.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://tech-talk-blog-eta.vercel.app/",
      code: "https://github.com/ThembelihleQueeneth/Tech-Talk-Blog.git"
    },
    {
      image: grocery,
      title: "Grocery List App",
      desc: "A simple app to manage your grocery list.",
      tech: ["React", "CSS", "TypeScript"],
      live: "https://grocery-list-navy-xi.vercel.app/",
      code: "https://github.com/ThembelihleQueeneth/Grocery-List.git"
    },
    {
      image: converterHub,
      title: "Converter Hub",
      desc: "A calculator app.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://convert-hub-cyan.vercel.app/",
      code: "https://github.com/ThembelihleQueeneth/ConvertHub.git"
    },
    {
      image: spane4all,
      title: "Spane 4 All",
      desc: "Contributed to UI improvements and job listings as an intern developer, gaining real-world teamwork experience.",
      tech: ["Bootstrap", "Node.js", "MySQL"],
      live: "https://spane4all.co.za/",
      code: ""
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            <span className="border-b-4 border-yellow-400 pb-1">Featured Projects</span>
          </h1>
          <p className="text-gray-700 text-lg mt-2">
            Exploring innovation through code, one project at a time
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* VIEW MORE BTN */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-4 bg-yellow-400 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300 flex items-center gap-3 "
          >
            <span>{showAll ? "Show Less" : "View More Projects"}</span>
            {showAll ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </button>
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

/* PROJECT CARD */
const ProjectCard = ({ image, title, desc, tech, live, code }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0  transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* INFO */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{desc}</p>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-yellow-400 text-white rounded-full text-sm font-bold "
            >
              {item}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <a href={live} target="_blank" className="flex-1">
            <Button text="Live Demo" icon={<FaEye />} />
          </a>

          {code ? (
            <a href={code} target="_blank" className="flex-1">
              <Button text="Code" icon={<FaGithub />} />
            </a>
          ) : (
            <div className="flex-1 opacity-60 cursor-not-allowed">
              <Button text="Private" icon={<FaGithub />} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
