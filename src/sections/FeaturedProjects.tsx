import { Button } from "../components/Button";
import { FaEye, FaGithub } from "react-icons/fa";
import lawyer from "../assets/law.png";
import converterHub from "../assets/converter.png";
import grocery from "../assets/grocery.png";
import blog from "../assets/blog.jpeg";
import spane4all from "../assets/spane4all.png";
import studio from "../assets/studio88.jpg";


// 🔹 Define the shape of the props (avoids ANY completely)
interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  tech: string[];
}

export const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
        <ProjectCard
          image={studio}
          title="Studio 88 Clone"
          desc="A responsive e-commerce website clone featuring product listings, shopping cart functionality, and a secure checkout process."
          tech={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectCard
          image={lawyer}
          title="Attorney Firm"
          desc="A profile for an Attorney Firm."
          tech={["React", "Tailwind", "TypeScript"]}
        />

        <ProjectCard
          image={blog}
          title="Tech-Talk-Blog"
          desc="A blog platform with authentication, article management, and an interactive commenting system."
          tech={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectCard
          image={grocery}
          title="Grocery List App"
          desc="A simple app to manage your grocery list."
          tech={["React", "CSS", "TypeScript"]}
        />

        <ProjectCard
          image={converterHub}
          title="Converter Hub"
          desc="A calculator app."
          tech={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectCard
          image={spane4all}
          title="Spane 4 All"
          desc="Contributed to UI improvements and job listings as an intern developer, gaining real-world teamwork experience."
          tech={["Bootstrap", "Node.js", "MySQL"]}
        />
      </div>
    </section>
  );
};



// 🔹 Reusable + fully typed
const ProjectCard = ({ image, title, desc, tech }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item: string) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button text="Live Demo" icon={<FaEye />} />
          <Button text="Code" icon={<FaGithub />} />
        </div>
      </div>
    </div>
  );
};
