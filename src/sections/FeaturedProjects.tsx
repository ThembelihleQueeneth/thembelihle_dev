import { Button } from "../components/Button";
import { FaEye, FaGithub } from "react-icons/fa";
import lawyer from "../assets/law.png";
import converterHub from "../assets/converter.png";
import grocery from "../assets/grocery.png";
import blog from "../assets/blog.jpeg";
import spane4all from "../assets/spane4all.png";
import studio from "../assets/studio88.jpg";

// Props (Typed)
interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  tech: string[];
  live: string;
  code: string;
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
          live="https://studio88-clone.vercel.app/"
          code="https://github.com/ThembelihleQueeneth/studio88Clone.git"
        />

        <ProjectCard
          image={lawyer}
          title="Attorney Firm"
          desc="A profile for an Attorney Firm."
          tech={["React", "Tailwind", "TypeScript"]}
          live="https://lawyer-website-eight-beta.vercel.app/"
          code="https://github.com/ThembelihleQueeneth/lawyer-website.git"
        />

        <ProjectCard
          image={blog}
          title="Tech-Talk-Blog"
          desc="A blog platform with authentication, article management, and an interactive commenting system."
          tech={["HTML", "CSS", "JavaScript"]}
          live="https://tech-talk-blog-eta.vercel.app/"
          code="https://github.com/ThembelihleQueeneth/Tech-Talk-Blog.git"
        />

        <ProjectCard
          image={grocery}
          title="Grocery List App"
          desc="A simple app to manage your grocery list."
          tech={["React", "CSS", "TypeScript"]}
          live="https://grocery-list-navy-xi.vercel.app/"
          code="https://github.com/ThembelihleQueeneth/Grocery-List.git"
        />

        <ProjectCard
          image={converterHub}
          title="Converter Hub"
          desc="A calculator app."
          tech={["HTML", "CSS", "JavaScript"]}
          live="https://convert-hub-cyan.vercel.app/"
          code="https://github.com/ThembelihleQueeneth/ConvertHub.git"
        />

        <ProjectCard
          image={spane4all}
          title="Spane 4 All"
          desc="Contributed to UI improvements and job listings as an intern developer, gaining real-world teamwork experience."
          tech={["Bootstrap", "Node.js", "MySQL"]}
          live="https://spane4all.co.za/"
          code=""   // Private repository
        />

      </div>
    </section>
  );
};


// REUSABLE CARD WITH LINKS
const ProjectCard = ({ image, title, desc, tech, live, code }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
      
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-6">
        
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button text="Live Demo" icon={<FaEye />} />
          </a>

          {code ? (
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button text="Code" icon={<FaGithub />} />
            </a>
          ) : (
            <Button text="Private" icon={<FaGithub />} />
          )}
        </div>
      </div>
    </div>
  );
};
