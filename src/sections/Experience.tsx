import { FaComputer } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "Mlab",
      date: "July 2025 - Present",
      icon: <FaComputer className="text-yellow-500 text-3xl" />,
      details: [
        "Develop web applications using React, Tailwind, TypeScript, Node.js, and PostgreSQL.",
        "Implement CRUD functionalities to manage application data efficiently.",
        "Participate in daily Scrum meetings to track progress and collaborate with the team.",
        "Work closely with colleagues, fostering a team-oriented development environment.",
        "Translate Figma designs into responsive, functional user interfaces.",
        "Use GitHub for version control and collaborative coding.",
        "Deploy and host applications on Vercel for live testing and production.",
        "Learn and apply Object-Oriented Programming (OOP) principles in projects.",
        "Learning UI/UX with Figma"
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Hiteknology Solutions",
      date: "Sept 2024 - June 2025",
      icon: <GrWorkshop className="text-yellow-500 text-3xl" />,
      details: [
        "Developed websites using Node.js, JavaScript, HTML, EJS, CSS, and MySQL.",
        "Collaborated in a team environment, improving communication and teamwork skills.",
        "Participated in daily Scrum meetings to monitor progress and coordinate tasks.",
        "Performed data capturing and assisted with administrative tasks.",
      ],
    },
    {
      title: "Diploma in Computer Science",
      company: "Tshwane University of Technology",
      date: "May 2021 - Dec 2024",
      icon: <FaUserGraduate className="text-yellow-500 text-3xl" />,
      details: [
        "Studied Java, Object-Oriented Programming (OOP), SQL, and GlassFish.",
        "Learned software development fundamentals, including algorithms, data structures, and application design.",
        "Gained hands-on experience in building and managing applications in academic projects.",
      ],
    },
  ];

  return (
    <div id="experience" className="relative py-20 mt-10 bg-white text-black px-6 md:px-20 lg:px-60">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-20">
        Experience & Education
      </h1>

      {/* Vertical line - centered on md+, left-aligned on mobile */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-500 transform -translate-x-1/2"></div>

      <div className="flex flex-col space-y-12 md:space-y-20">
        {experiences.map((exp, idx) => {
          const isRight = idx % 2 === 0; // even index = right, odd = left
          return (
            <div key={idx} className="w-full flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
              {/* Desktop layout spacing */}
              {isRight && <div className="hidden md:block md:w-1/2"></div>}

              <motion.div
                className={`w-full md:w-5/12 bg-gray-50 p-6 rounded-2xl shadow-lg relative ml-12 md:ml-0 ${
                  isRight ? "md:ml-8" : "md:mr-8"
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* timeline circle - left-aligned on mobile, alternating on md+ */}
                <div
                  className={`absolute top-8 w-5 h-5 bg-yellow-500 rounded-full -left-9 md:left-auto ${
                    isRight ? "md:-left-10" : "md:-right-10"
                  }`}
                ></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h2 className="flex items-center text-xl md:text-2xl font-semibold gap-2">
                    {exp.icon} {exp.title}
                  </h2>
                  <span className="text-gray-600 text-sm md:text-base whitespace-nowrap">{exp.date}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 font-medium mb-4">
                  <FaLocationDot className="text-yellow-500" />
                  <span>{exp.company}</span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Desktop layout spacing */}
              {!isRight && <div className="hidden md:block md:w-1/2"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
